import { z } from "zod";

export const retgisterSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.email("email is required"),
  password: z.string().min(6, "password at least 6 charecters"),
});

export const loginSchema = z.object({
  email: z.email("email is required"),
  password: z.string().min(6, "password at least 6 charecters"),
});

export type RegisterInput = z.infer<typeof retgisterSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
