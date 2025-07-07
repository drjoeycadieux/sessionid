require("dotenv").config();
const { Pool } = require("pg");
const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many submissions from this IP, please try again later",
});

// Apply rate limiting to the contact route
router.use(limiter);

// Enhanced PostgreSQL connection pool with retry logic
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT || 5432,
  ssl: process.env.PG_SSL === "true" ? { rejectUnauthorized: false } : false,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
  max: 20,
});

// Error handling for pool
pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
});

// Email validation function
const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

// Create user_messages table with additional fields
async function createTable() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS user_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        ip_address VARCHAR(45),
        user_agent TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT unique_email_per_day UNIQUE (email, DATE(created_at))
      );
      
      CREATE INDEX IF NOT EXISTS idx_user_messages_email ON user_messages(email);
      CREATE INDEX IF NOT EXISTS idx_user_messages_created_at ON user_messages(created_at);
    `);
    console.log("Database table setup completed");
  } catch (err) {
    console.error("Error creating table or indexes:", err);
    throw err;
  } finally {
    client.release();
  }
}

// Initialize database (with retry logic)
async function initializeDatabase() {
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    try {
      await createTable();
      return;
    } catch (err) {
      attempts++;
      if (attempts >= maxAttempts) {
        console.error(
          "Failed to initialize database after",
          maxAttempts,
          "attempts"
        );
        throw err;
      }
      console.log(
        `Retrying database initialization (attempt ${attempts + 1})...`
      );
      await new Promise((resolve) => setTimeout(resolve, 2000 * attempts));
    }
  }
}

initializeDatabase().catch((err) => {
  console.error("Critical database initialization error:", err);
  process.exit(1);
});

// Enhanced POST endpoint with input validation
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  if (name.length > 100) {
    return res.status(400).json({
      success: false,
      error: "Name must be less than 100 characters",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      error: "Please provide a valid email address",
    });
  }

  if (message.length > 2000) {
    return res.status(400).json({
      success: false,
      error: "Message must be less than 2000 characters",
    });
  }

  const client = await pool.connect();

  try {
    const result = await client.query(
      `INSERT INTO user_messages 
       (name, email, message, ip_address, user_agent) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id, created_at`,
      [
        name.trim(),
        email.trim(),
        message.trim(),
        req.ip,
        req.headers["user-agent"],
      ]
    );

    return res.status(201).json({
      success: true,
      message: "Thank you for your message!",
      data: {
        id: result.rows[0].id,
        submitted_at: result.rows[0].created_at,
      },
    });
  } catch (error) {
    console.error("Database error:", error);

    if (error.code === "23505") {
      // Unique violation
      return res.status(400).json({
        success: false,
        error:
          "You've already submitted a message today. Please try again tomorrow.",
      });
    }

    return res.status(500).json({
      success: false,
      error: "An error occurred while processing your message",
    });
  } finally {
    client.release();
  }
});

// Optional: GET endpoint for admin purposes (protected)
router.get("/", async (req, res) => {
  // Basic admin check (in production, use proper authentication)
  if (req.query.admin_key !== process.env.ADMIN_KEY) {
    return res.status(403).json({
      success: false,
      error: "Unauthorized",
    });
  }

  const client = await pool.connect();

  try {
    const { rows } = await client.query(
      `SELECT id, name, email, created_at 
       FROM user_messages 
       ORDER BY created_at DESC 
       LIMIT 100`
    );

    return res.json({
      success: true,
      count: rows.length,
      messages: rows,
    });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to retrieve messages",
    });
  } finally {
    client.release();
  }
});

module.exports = router;
