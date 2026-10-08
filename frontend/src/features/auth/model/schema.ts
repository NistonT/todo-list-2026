import { z } from "zod";

export const loginSchema = z.object({
  login: z.string().min(3).max(15).trim(),
  password: z.string().min(6),
  remember: z.boolean().optional(),
});

export type TLoginFormData = z.infer<typeof loginSchema>;
