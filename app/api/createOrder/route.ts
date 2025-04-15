import Razorpay from "razorpay"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { amount, currency } = await request.json()

  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID,
    key_secret: process.env.RAZOR_PAY_SECRET_KEY,
  })

  const receipt = Math.random().toString(36).substring(2, 12); // like "h4k9f2l8q3"

  try {
    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt,
    })

    return NextResponse.json(order)
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
