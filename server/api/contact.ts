import { db } from '../utils/db';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event); // Read request body
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return { success: false, error: 'All fields are required' };
    }

    await db.execute(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    return { success: true };
  } catch (error) {
    console.error('Database Error:', error);
    return { success: false, error: (error as Error).message };
  }
});

