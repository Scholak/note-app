export const mockLists = [
	{
		id: 1,
		name: 'test list 1',
		description: 'test list description',
		userId: 1,
		todos: [
			{ id: 1, name: 'test todo 1', completed: false, listId: 1 },
			{ id: 2, name: 'test todo 2', completed: true, listId: 1 },
		],
	},
	{
		id: 2,
		name: 'test list 2',
		userId: 1,
		todos: [],
	},
]

export const mockList = {
	id: 1,
	name: 'test list single',
	description: 'test list description',
	userId: 1,
	todos: [
		{ id: 1, name: 'test todo 1', completed: false, listId: 1 },
	],
}