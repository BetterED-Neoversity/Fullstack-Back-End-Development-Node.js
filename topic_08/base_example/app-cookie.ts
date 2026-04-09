// app.ts
import express from 'express'
import type { Request, Response } from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
}

app.get('/set', (req: Request, res: Response) => {
  res.cookie('username', 'john', {
    ...cookieOptions,
    maxAge: 24 * 60 * 60 * 1000,
  })
  res.send('Cookie встановлено')
})

app.get('/read', (req: Request, res: Response) => {
  const username = req.cookies.username as string
  if (!username) {
    res.send('Користувач не авторизований')
    return
  }

  res.send(`Привіт, ${username}`)
})

app.get('/logout', (req: Request, res: Response) => {
  res.clearCookie('username', cookieOptions)
  res.send('Cookie видалено')
})

app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000')
})
