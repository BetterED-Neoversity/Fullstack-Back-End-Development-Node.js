import express, { type Request, type Response } from 'express'
import pino from 'pino'
import { pinoHttp } from 'pino-http'

const isDev = process.env.NODE_ENV !== 'production'

const logger = pino({
  level: isDev ? 'debug' : 'info',
  ...(isDev && {
    transport: {
      target: 'pino-pretty',
    },
  }),
})

const app = express()

app.use(pinoHttp({ logger }))

app.get('/hello', (req: Request, res: Response) => {
  req.log.debug('Debug info - visible only in development')
  req.log.info('Processing request')
  res.json({ message: 'Hello!' })
})

app.listen(3000, () => {
  logger.info('Server is running on port 3000')
})
