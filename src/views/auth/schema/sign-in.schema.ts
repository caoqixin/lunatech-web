import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "password is required"),
});

export type signIn = z.infer<typeof signInSchema>;
