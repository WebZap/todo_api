import { NextFunction, Request, Response } from 'express'

import { IQPBolleanMw } from '../types'

const booleanMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const interParams = req.query as IQPBolleanMw
	for (const key in interParams) {
		if (Object.prototype.hasOwnProperty.call(interParams, key)) {
			const element = interParams[key]
			if (element === 'true' || element === 'false') {
				interParams[key] = element === 'true'
			}
		}
	}
	next()
}

export { booleanMiddleware }
