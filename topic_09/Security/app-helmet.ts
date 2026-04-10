import express, { type Request, type Response } from 'express'
import helmet from 'helmet'

const app = express()

app.use(helmet())

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello!' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
