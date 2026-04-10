import cron from 'node-cron'

console.log(cron.validate('* * * * *')) // true
console.log(cron.validate('*/5 * * * *')) // true
console.log(cron.validate('0 3 * * *')) // true
console.log(cron.validate('invalid')) // false
console.log(cron.validate('60 * * * *')) // false (хвилина 0-59)
