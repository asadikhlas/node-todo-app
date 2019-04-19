const validator = require('validator')
const printMsg =  require('./msg')


let msg = printMsg()
console.log(msg)

const myEmail = "asadikhlas@gmail.com"

console.log(validator.isEmail(myEmail))