"use server"

import db from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

interface Props {
  name: string;
  age: number;
  address: string;
  symptoms: string;
  gender: string;
  previousTreatment: string;
  medicalHistory: string;
  appointmentDate: Date;
  appointmentTime: string;
  email: string;
  whatsAppNumber: string;
  userId: string; // required to link to User
}

export async function BookAppointment(data: Props) {
  const { appointmentDate, appointmentTime, userId } = data;

  const dateOnly = new Date(data.appointmentDate);
  dateOnly.setHours(0, 0, 0, 0);

  // Step 1: Check if an appointment already exists at that date + time
  const existing = await db.appointment.findFirst({
    where: {
      appointmentDate: dateOnly,
      appointmentTime: appointmentTime,
    },
  });

  if (existing) {
    return {
      success: false,
      error: "This time slot is already booked.",
    };
  }

  // Step 2: Create appointment
  await db.appointment.create({
    data: {
      patientName: data.name,
      age: data.age,
      address: data.address,
      symptoms: data.symptoms,
      gender: data.gender,
      previousTreatment: data.previousTreatment,
      medicalHistory: data.medicalHistory,
      appointmentDate: dateOnly,
      appointmentTime: appointmentTime,
      email: data.email,
      whatsAppNumber: data.whatsAppNumber,
      userId: userId,
    },
  });

  revalidatePath("/appointments"); // optional, if you show appointments

  return {
    success: true,
    message: "Appointment booked successfully.",
  };
}
