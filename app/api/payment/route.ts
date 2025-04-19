// app/api/payment/route.ts

import db from '@/lib/db/prisma';

// Define the expected shape of the request body for TypeScript
interface PaymentRequestBody {
  userId: string;
  amount: number;
  paymentStatus: string;
  paymentMethod: string;
}

export async function POST(req: Request) {
  try {
    const { userId, amount, paymentStatus, paymentMethod }: PaymentRequestBody = await req.json();

    // Validate incoming data
    if (!userId || !amount || !paymentStatus || !paymentMethod) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
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
    return new Response(JSON.stringify(payment), { status: 201 });
  } catch (error) {
    console.error('Error creating payment:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create payment' }),
      { status: 500 }
    );
  }
}
