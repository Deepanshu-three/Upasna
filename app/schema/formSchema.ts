import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  age: z.number().min(1),
  address: z.string().min(1),
  symptoms: z.string().min(1),
  gender: z.string().min(1),
  previousTreatment: z.string(),
  medicalHistory: z.string(),
  whatsAppNumber: z.string().min(1)
})
