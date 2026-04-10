import express, { type Request, type Response } from 'express'
import rateLimit from 'express-rate-limit'

const app = express()

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later' },
})

app.use(globalLimiter)

const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many attempts, please try again later' },
})

app.use(express.json())

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello!' })
})

app.post('/login', strictLimiter, (req: Request, res: Response) => {
  res.json({ message: 'Login endpoint' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
