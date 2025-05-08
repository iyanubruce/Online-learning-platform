import { z } from "zod";
export const passwordSchema = z
  .string()
  .trim()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(100, { message: "Password must not exceed 100 characters" })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one digit" })
  .regex(/[^\w]/, {
    message: "Password must contain at least one special character",
  });

export const userSchema = z
  .object({
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    email: z.string().email(),
    password: passwordSchema,
    role: z.string().min(1),
  })
  .strict();

export const userLoginSchema = z
  .object({
    email: z.string().email(),
    password: passwordSchema,
  })
  .strict();
