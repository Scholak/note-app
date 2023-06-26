import { z, ZodType } from 'zod'

export const registerSchema: ZodType<RegisterSchema> = z.object({
  name: z.string().min(2).max(15),
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirmation: z.string()
}).refine(data => data.password === data.passwordConfirmation, {
  message: 'passwords don\'t match',
  path: ['passwordConfirmation']
})

export const loginSchema: ZodType<LoginSchema> = z.object({
	email: z.string().email(),
	password: z.string().min(6),
})

export const forgetPasswordSchema: ZodType<ForgetPasswordSchema> = z.object({
	email: z.string().email(),
})

export const resetPasswordSchema: ZodType<ResetPasswordSchema> = z.object({
	password: z.string().min(6),
	passwordConfirmation: z.string(),
}).refine(data => data.password === data.passwordConfirmation, {
  message: 'passwords don\'t match',
  path: ['passwordConfirmation']
})