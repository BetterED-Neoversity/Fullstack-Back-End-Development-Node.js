import express, { type Request, type Response } from 'express'
import pino from 'pino'
import { pinoHttp } from 'pino-http'

const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
  },
})

const app = express()

app.use(pinoHttp({ logger }))

app.get('/hello', (req: Request, res: Response) => {
  req.log.info('Processing hello request')
  res.json({ message: 'Hello!' })
})

app.get('/users/:id', (req: Request, res: Response) => {
  req.log.info({ userId: req.params.id }, 'Fetching user')
  res.json({ id: req.params.id, name: 'John' })
})

app.listen(3000, () => {
  logger.info('Server is running on port 3000')
})
