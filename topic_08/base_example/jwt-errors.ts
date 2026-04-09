// jwt-errors.ts
import jwt from 'jsonwebtoken'

const SECRET = 'my-super-secret-key'

const token = jwt.sign({ sub: '42' }, SECRET, { expiresIn: '1s' })

try {
  jwt.verify(token, 'wrong-secret')
} catch (error) {
  if (error instanceof jwt.JsonWebTokenError) {
    console.log(error.name, '-', error.message)
  }
}

setTimeout(() => {
  try {
    jwt.verify(token, SECRET)
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.log(error.name, '-', error.message)
    }
  }
}, 2000)
