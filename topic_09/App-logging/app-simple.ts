import express, { type Request, type Response } from 'express'
import pino from 'pino'

const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
  },
})

const app = express()

app.use(express.json())

app.post('/login', (req: Request, res: Response) => {
  const { email } = req.body

  logger.info({ email }, 'Login attempt')

  if (email === 'admin@example.com') {
    logger.info({ email }, 'Login successful')
    res.json({ message: 'Welcome!' })
  } else {
    logger.warn({ email }, 'Login failed: unknown email')
    res.status(401).json({ error: 'Invalid credentials' })
  }
})

app.get('/hello', (req: Request, res: Response) => {
  logger.info('Received request to /hello')
  res.json({ message: 'Hello!' })
})

app.get('/error', (req: Request, res: Response) => {
  logger.error('Something went wrong')
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(3000, () => {
  logger.info('Server is running on port 3000')
})
