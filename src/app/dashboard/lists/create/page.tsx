import CreateList from '@/components/CreateList'
import React from 'react'

export const metadata = {
	title: 'Create New List',
}

const CreateListForm = () => {
	return (
		<div>
			<h3 className='mb-4 text-2xl font-semibold'>Create New List</h3>
			<CreateList />
		</div>
	)
}

export default CreateListForm
