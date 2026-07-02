import { z } from "zod";

console.log("Loading auth.schema.ts");

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must contain at least 6 characters"),
  }),
});

