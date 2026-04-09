// middleware/authenticate.ts
import jwt from 'jsonwebtoken'
import type { Request, Response, NextFunction } from 'express'

declare global {
  namespace Express {
    interface Request {
      user?: jwt.JwtPayload
    }
  }
}

const JWT_SECRET = 'my-super-secret-key-that-should-be-in-env'

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded as jwt.JwtPayload
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}

export default authenticate
