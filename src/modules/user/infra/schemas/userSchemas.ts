import { z } from "zod";

export const updateUserSchema = z
  .object({
    email: z.email(),
  })
  .strict();

export const createUserSchema = z
  .object({
    email: z.email(),
    password: z.string(),
  })
  .strict();
