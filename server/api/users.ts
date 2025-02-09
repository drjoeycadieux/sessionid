import { db } from '../utils/db';
import { RowDataPacket } from 'mysql2';

// Define a TypeScript interface for Users
interface User extends RowDataPacket {
  id: number;
  name: string;
  email: string;
  created_at: Date;
}

export default defineEventHandler(async () => {
  try {
    // Properly cast the result set
    const [rows] = await db.execute<User[]>('SELECT * FROM users');

    return { users: rows };
  } catch (error) {
    console.error('Database Query Error:', error);
    return { error: (error as Error).message };
  }
});
