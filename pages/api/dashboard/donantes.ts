import type { NextApiRequest, NextApiResponse } from 'next';
import { db, donantes } from '@/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const result = await db.select().from(donantes).all();
            return res.status(200).json(result);
        } catch (error) {
            console.error('Error fetching donantes:', error);
            return res.status(500).json({ message: 'Error fetching donantes' });
        }
    }
    return res.status(405).json({ message: 'Method Not Allowed' });
}