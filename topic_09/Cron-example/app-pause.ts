import express, { type Request, type Response } from 'express'
import cron from 'node-cron'

const app = express()

const task = cron.schedule('* * * * *', () => {
  const now = new Date().toLocaleTimeString()
  console.log(`[${now}] Task executed`)
})

app.post('/task/stop', (_req: Request, res: Response) => {
  task.stop()
  res.json({ message: 'Task stopped' })
})

app.post('/task/start', (_req: Request, res: Response) => {
  task.start()
  res.json({ message: 'Task started' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
