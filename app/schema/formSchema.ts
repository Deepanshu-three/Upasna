import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  age: z.number().min(1),
  address: z.string().min(1),
  symptoms: z.string().min(1).max(100),
  gender: z.string().min(1),
  whatsAppNumber: z.string().min(1)
})
