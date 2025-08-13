import { isValid, parseISO } from "date-fns";
import { z } from "zod";

export const updateCategorySchema = z
  .object({
    fixedPercent: z.number().min(0).max(100).optional(),
    confortPercent: z.number().min(0).max(100).optional(),
    goalsPercent: z.number().min(0).max(100).optional(),
    joyPercent: z.number().min(0).max(100).optional(),
    investmentPercent: z.number().min(0).max(100).optional(),
    studyPercent: z.number().min(0).max(100).optional(),
    categoryDate: z
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
// .refine(
//   (data) => {
//     const total =
//       (data.fixedPercent ?? 0) +
//       (data.confortPercent ?? 0) +
//       (data.goalsPercent ?? 0) +
//       (data.joyPercent ?? 0) +
//       (data.investmentPercent ?? 0) +
//       (data.studyPercent ?? 0);
//     return total === 100;
//   },
//   {
//     message: "Total percentage must equal 100",
//   }
// );

export const createCategorySchema = z
  .object({
    id: z.uuid().optional(),
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
