import express, { Application, Request, Response } from 'express'

import { Read } from './controllers'
import { booleanMiddleware } from './middlewares/booleanMiddleware'

const server: Application = express()
server.use(express.json())
server.use(booleanMiddleware)

const port = process.env.PORT || 3000

server.get('/todos', Read.getTasks)

server.listen(port, () => {
	console.log(`Serve is started on ${port} port`)
})
