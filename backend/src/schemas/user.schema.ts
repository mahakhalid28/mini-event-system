import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    fullName: z
      .string()
      .min(3, "Full name must be at least 3 characters"),

    email: z
      .email("Invalid email address"),

    password: z
      .string()
      .min(6, "Password must contain at least 6 characters"),
  }),
});