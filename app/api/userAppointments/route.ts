import { auth } from "@/auth";
import db from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await auth();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const data = await db.appointment.findMany({
    where: {
      userId: user.user.id!,
    },
    select: {
      patientName: true,
      age: true,
      gender: true,
      appointmentDate: true, // appointment date
      appointmentTime: true,
      symptoms: true,
    },
  });

  return NextResponse.json(data);
}
