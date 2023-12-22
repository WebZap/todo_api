import { Request, Response } from 'express'

import { DataBase } from '../data/operationDataBase'
import { IQPBolleanMw } from '../types'
import { httpStatusCode } from '../utils/httpStatusCode'

const Read = {
	getTasks: function (req: Request, res: Response) {
		if (Object.keys(req.query).length !== 0) {
			const interParams = req.query as IQPBolleanMw
			const isActive = interParams.active
			const foundTasks = DataBase.todo.filter(
				task => task.isActive === isActive
			)
			res.status(httpStatusCode.OK_200).json(foundTasks)
			return
		}
		res.status(httpStatusCode.OK_200).json(DataBase.todo)
	},
	getOneTask: function (req: Request, res: Response) {
		const idTask = +req.params.id
		const foundTask = DataBase.todo.find(task => task.id === idTask)
		if (!foundTask) {
			res.status(httpStatusCode.NOT_FOUND_404)
			return
		}
		res.status(httpStatusCode.OK_200).json(foundTask)
	},
}

export { Read }
