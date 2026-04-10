import express, { type Request, type Response } from 'express'
import cron from 'node-cron'

const app = express()

// Задача 1: виконується кожну хвилину
cron.schedule('* * * * *', () => {
  const now = new Date().toLocaleTimeString()
  console.log(`[${now}] Cron job executed every minute`)
})

// Задача 2: виконується кожні 5 хвилин
cron.schedule('*/5 * * * *', () => {
  const now = new Date().toLocaleTimeString()
  console.log(`[${now}] Cron job executed every 5 minutes`)
})

app.get('/hello', (_req: Request, res: Response) => {
  res.json({ message: 'Hello!' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
