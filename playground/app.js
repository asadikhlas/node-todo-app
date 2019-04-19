const validator = require('validator')
const printMsg =  require('./msg')
const chalk = require('chalk')
const yargs = require('yargs')


let msg = printMsg()
console.log(msg)
console.log(chalk.blue('hello'))
const myEmail = "asadikhlas@gmail.com"

console.log(validator.isEmail(myEmail))

yargs.command ({
    command: 'delete',
    describe:'delete records..',
    builder:{
        title:{
            describe:'title to delete',
            alias:'t',
            demandOption: true,
            type:'string',
            default:'...'
        },
    },
    handler: (argv) => {
        console.log("deleting record", argv.title)
    }
})


console.log(yargs.argv.username)