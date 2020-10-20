const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Costumize yeargs version
yargs.version('1.1.0')

// Creat add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // you need to pravide the option to run
            type: 'string' // option's type
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){ notes.addNote(argv.title, argv.body) }
})

//Creat remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.removeNote(argv.title) }
})

//Creat list command
yargs.command({
    command:'list',
    describe: 'List notes',
    handler() { notes.listNotes() }
})
//Creat read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { notes.readNote(argv.title) }
})
// add, remove, read, list

yargs.parse() // goes to the processe of parcing the code