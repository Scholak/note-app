interface List {
	id: number
	name: string
	description: string | null
	userId: number
}

interface CreateListSchema {
	name: string
	description: string | null
	userId: number
}

interface UpdateListSchema {
	name: string
	description: string | null
}