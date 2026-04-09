// auth.ts
import bcrypt from 'bcrypt'

const saltRounds = 10
const password = 'mySecretPassword'

const hashedPassword = await bcrypt.hash(password, saltRounds)
console.log(hashedPassword)

const isMatch = await bcrypt.compare('mySecretPassword', hashedPassword)
console.log(isMatch)

const isWrong = await bcrypt.compare('wrongPassword', hashedPassword)
console.log(isWrong)
