const validator = require('validator')
const printMsg =  require('./msg')
const chalk = require('chalk')


let msg = printMsg()
console.log(msg)
console.log(chalk.blue('hello'))
const myEmail = "asadikhlas@gmail.com"

console.log(validator.isEmail(myEmail))