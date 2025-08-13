import { Decimal } from "@prisma/client/runtime/library";
import { isValid, parseISO } from "date-fns";
import z from "zod";

export const createIncomeSchema = z.object({
  userId: z.uuid(),
  amount: z
    .number()
    .min(0)
    .transform((val) => new Decimal(val)),
  name: z.string().max(255),
  incomeDate: z
    .string()
    .refine((val) => isValid(parseISO(val)), {
      message: "Invalid income date",
    })
    .transform((val) => parseISO(val)),
  createdAt: z
    .string()
    .refine((val) => isValid(parseISO(val)), {
      message: "Invalid created at date",
    })
    .transform((val) => parseISO(val))
    .optional(),
  updateAt: z
    .string()
    .refine((val) => isValid(parseISO(val)), {
      message: "Invalid update date",
    })
    .transform((val) => parseISO(val))
    .optional(),
});

export const updateIncomeSchema = z.object({
  amount: z.number().min(0),
  name: z.string().max(255),
  updateAt: z
    .string()
    .refine((val) => isValid(parseISO(val)), {
      message: "Invalid update date",
    })
    .transform((val) => parseISO(val))
    .optional(),
});
