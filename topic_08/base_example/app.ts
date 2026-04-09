// app.js
import express from 'express'
import type { Request, Response } from 'express'
import authenticate from './middleware/authenticate.ts'

const app = express()

app.use(express.json())

// Публічний маршрут — доступний всім
app.get('/api/recipes', (req: Request, res: Response) => {
  res.json({ message: 'Public list of recipes' })
})

// Захищений маршрут — тільки з валідним токеном
app.post('/api/recipes', authenticate, (req: Request, res: Response) => {
  res.json({
    message: 'Recipe created',
    userId: req.user?.sub,
  })
})

app.listen(3000, () => {
  console.log('Server: http://localhost:3000')
})
