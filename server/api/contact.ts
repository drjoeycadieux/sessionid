import { db } from '../utils/db';

export default defineEventHandler(async (event) => {
  // Get the request method (GET, POST, etc.)
  const method = getMethod(event);

  if (method === 'GET') {
    return { message: 'API is working. Use POST to submit data.' };
  }

  if (method === 'POST') {
    try {
      const body = await readBody(event);
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
  }

  return { success: false, error: 'HTTP method is not allowed.' };
});


