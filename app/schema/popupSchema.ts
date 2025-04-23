import { z } from "zod";

export const popupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be no more than 50 characters long." }),

  city: z
    .string()
    .min(1, { message: "City is required." }),

  phone: z
    .string()
    .regex(/^\d{10}$/, {
      message: "Phone number must be exactly 10 digits.",
    }),
});
