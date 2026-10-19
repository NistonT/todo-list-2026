import z from "zod";

export const registerSchema = z.object({
  login: z.string().min(3).max(15).trim(),
  password: z.string().min(6),
  confirmPassword: z.string(),
});

export type TRegisterFormData = z.infer<typeof registerSchema>;
