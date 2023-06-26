import { z, ZodType } from 'zod'

const messages = {
	name: {
		required: 'Name field is required',
		min: 'Name field must be at least 2 characters',
	},
	userId: {
		nonnegative: 'User id must be positive integer'
	}
}

export const createListSchema: ZodType<CreateListSchema> = z.object({
	name: z.string().nonempty(messages.name.required).min(2, messages.name.min),
	description: z.string(),
	userId: z.number().nonnegative(messages.userId.nonnegative),
})

export const updateListSchema: ZodType<UpdateListSchema> = z.object({
	name: z.string().nonempty(messages.name.required).min(2, messages.name.min),
	description: z.string(),
})