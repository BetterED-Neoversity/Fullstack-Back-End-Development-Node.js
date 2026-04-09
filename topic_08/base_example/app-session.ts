import express from 'express'
import type { Request, Response } from 'express'
import session from 'express-session'
import connectSqlite3 from 'connect-sqlite3'

declare module 'express-session' {
  interface SessionData {
    userId: number
    username: string
  }
}

type SQLiteStoreConstructor = new (options: {
  db: string
  dir: string
}) => session.Store

const SQLiteStore = connectSqlite3(session) as unknown as SQLiteStoreConstructor

const app = express()

app.use(
  session({
    store: new SQLiteStore({ db: 'dev.db', dir: '.' }),
    secret: process.env.SESSION_SECRET!,
    name: 'sessionId',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
