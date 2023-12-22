export interface ITodoItem {
	id: number
	userId: number
	message: string
	isActive: boolean
}

export type IListTodo = {
	todo: ITodoItem[]
}
