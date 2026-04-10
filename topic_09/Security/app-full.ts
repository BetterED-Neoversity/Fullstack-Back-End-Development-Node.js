import express, { type Request, type Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

const app = express()

// 1. CORS — щоб preflight-запити отримували правильні заголовки
app.use(
  cors({
    /* ... */
  }),
)

// 2. Заголовки безпеки — додаються до кожної відповіді
app.use(helmet())

// 3. Обмеження запитів — перевіряється до обробки тіла
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later' },
})

app.use(limiter)

// 4. Парсинг тіла запиту
app.use(express.json())

// 5. Маршрути
app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello!' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
