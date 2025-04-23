import { z } from "zod"

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be no more than 50 characters long." }),
  age: z
    .number({ invalid_type_error: "Age must be a number." })
    .min(1, { message: "Age must be at least 1." }),
  address: z
    .string()
    .min(1, { message: "Address cannot be empty." }),
  symptoms: z
    .string()
    .min(1, { message: "Please describe your symptoms." })
    .max(100, { message: "Symptoms description is too long; please keep it under 100 characters." }),
  gender: z
    .string()
    .min(1, { message: "Gender is required." }),
  whatsAppNumber: z
    .string()
    .regex(/^\d{10}$/, {
      message: "WhatsApp number must be exactly 10 digits.",
    }),
});
