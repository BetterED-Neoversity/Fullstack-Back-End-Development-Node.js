// create-token.ts
import jwt from 'jsonwebtoken'

const SECRET = 'my-super-secret-key-that-should-be-in-env'

const token = jwt.sign({ sub: '42' }, SECRET, { expiresIn: '15m' })

console.log(token)
