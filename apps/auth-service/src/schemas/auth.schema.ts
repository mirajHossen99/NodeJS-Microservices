import { z } from "zod/v3";

export const registerSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("email is required"),
  password: z.string().min(6, "password at least 6 charecters"),
});

export const loginSchema = z.object({
  email: z.string().email("email is required"),
  password: z.string().min(6, "password at least 6 charecters"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
