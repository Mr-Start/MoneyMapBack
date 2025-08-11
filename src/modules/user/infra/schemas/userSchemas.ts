import { z } from "zod";

export const updateUserSchema = z
  .object({
    email: z.email({ message: "Invalid email format" }),
  })
  .strict();

export const createUserSchema = z
  .object({
    email: z.email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  })
  .strict();
