import db from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Fetch all appointments on or after today (ignore time part)
    const data = await db.appointment.findMany({
        where: {
            appointmentDate: {
                gte: today,
            },
        },
        orderBy: {
            appointmentDate: "asc",
        },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return new NextResponse("Failed to fetch appointments", { status: 500 });
  }
}
