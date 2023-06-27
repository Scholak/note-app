import { z, ZodType } from 'zod'

const messages = {
	name: {
		required: 'Name field is required',
		min: 'Name field must be at least 2 characters',
	},
}

export const createTodoSchema: ZodType<CreateTodoSchema> = z.object({
	name: z.string().nonempty(messages.name.required).min(2, messages.name.min),
})