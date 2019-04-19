const validator = require('validator')
const printMsg =  require('./msg')
const chalk = require('chalk')
const yargs = require('yargs')


let msg = printMsg()
console.log(msg)
console.log(chalk.blue('hello'))
const myEmail = "asadikhlas@gmail.com"

console.log(validator.isEmail(myEmail))


console.log(yargs.argv.username)