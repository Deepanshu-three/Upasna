import { z } from "zod"

export const popupSchema = z.object({
  name: z.string().min(2).max(50),
  city: z.string().min(1),
  phone: z.string().min(1)
})
