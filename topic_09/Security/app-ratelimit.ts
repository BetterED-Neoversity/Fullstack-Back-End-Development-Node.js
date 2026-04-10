import express, { type Request, type Response } from 'express'
import rateLimit from 'express-rate-limit'

const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: {
    error: 'Too many requests, please try again later',
  },
})

app.use(limiter)

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello!' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
