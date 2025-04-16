import db from '@/lib/db/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

// Define the expected shape of the request body for TypeScript
interface PaymentRequestBody {
  userId: string;
  amount: number;
  paymentStatus: string;
  paymentMethod: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, amount, paymentStatus, paymentMethod }: PaymentRequestBody = req.body;

      // Validate incoming data
      if (!userId || !amount || !paymentStatus || !paymentMethod) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Create a new payment record in the database
      const payment = await db.payment.create({
        data: {
          userId,
          amount,
          paymentStatus,
          paymentMethod,
        },
      });

      // Return the created payment data
      res.status(201).json(payment);
    } catch (error) {
      console.error('Error creating payment:', error);
      res.status(500).json({ error: 'Failed to create payment' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
