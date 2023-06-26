import { z, ZodType } from 'zod'

const messages = {
	name: {
		required: 'Name field is required',
		min: 'Name field must be at least 2 characters',
		max: 'Name field must be at most 15 characters',
	},
	email: {
		required: 'Email field is required',
		email: 'Email address must be valid',
	},
	password: {
		required: 'Password field is required',
		min: 'Password field must be at least 6 characters',
	},
	passwordConfirmation: {
		required: 'Password Confirmation field is required',
		same: 'Passwords are not matching',
	},
}

export const registerSchema: ZodType<RegisterSchema> = z.object({
  name: z.string().nonempty(messages.name.required).min(2, messages.name.max).max(15, messages.name.max),
  email: z.string().nonempty(messages.email.required).email(messages.email.email),
  password: z.string().nonempty(messages.password.required).min(6, messages.password.min),
  passwordConfirmation: z.string().nonempty(messages.passwordConfirmation.required)
}).refine(data => data.password === data.passwordConfirmation, {
  message: messages.passwordConfirmation.same,
  path: ['passwordConfirmation']
})

export const loginSchema: ZodType<LoginSchema> = z.object({
	email: z.string().nonempty(messages.email.required).email(messages.email.email),
  password: z.string().nonempty(messages.password.required).min(6, messages.password.min),
})

export const forgetPasswordSchema: ZodType<ForgetPasswordSchema> = z.object({
	email: z.string().nonempty(messages.email.required).email(messages.email.email),
})

export const resetPasswordSchema: ZodType<ResetPasswordSchema> = z.object({
	password: z.string().nonempty(messages.password.required).min(6, messages.password.min),
  passwordConfirmation: z.string().nonempty(messages.passwordConfirmation.required)
}).refine(data => data.password === data.passwordConfirmation, {
  message: messages.passwordConfirmation.same,
  path: ['passwordConfirmation']
})