import { isValid, parseISO } from "date-fns";
import { z } from "zod";

export const updateCategorySchema = z
  .object({
    fixedPercent: z.number().min(0).max(100),
    confortPercent: z.number().min(0).max(100),
    goalsPercent: z.number().min(0).max(100),
    joyPercent: z.number().min(0).max(100),
    investmentPercent: z.number().min(0).max(100),
    studyPercent: z.number().min(0).max(100),
    categoryDate: z.date(),
  })
  .strict()
  .refine(
    (data) => {
      const total =
        data.fixedPercent +
        data.confortPercent +
        data.goalsPercent +
        data.joyPercent +
        data.investmentPercent +
        data.studyPercent;
      return total === 100;
    },
    {
      message: "Total percentage must equal 100",
    }
  );

export const createCategorySchema = z
  .object({
    userId: z.uuid(),
    categoryDate: z
      .string()
      .optional()
      .refine((val) => !val || isValid(parseISO(val)), {
        message: "Invalid date",
      })
      .transform((val) => (val ? parseISO(val) : undefined)),
    createdAt: z
      .string()
      .optional()
      .refine((val) => !val || isValid(parseISO(val)), {
        message: "Invalid date",
      })
      .transform((val) => (val ? parseISO(val) : undefined)),
    updatedAt: z
      .string()
      .optional()
      .refine((val) => !val || isValid(parseISO(val)), {
        message: "Invalid date",
      })
      .transform((val) => (val ? parseISO(val) : undefined)),
  })
  .strict();
