// import chalk from 'chalk';

// let fs = require('fs')

// fs.writeFileSync('notes.txt', "Sarah")

// let data = fs.readFileSync('notes.txt')
// console.log(data.toString());

// let append = fs.appendFileSync('notes.txt', 'dataa')

// // let mod = require('./data.js')
// // console.log(mod.z)
// let validator = require('validator');
// let s = validator.isEmail('s.fawzy@yahoo.com')
// // let chalk = require('chalk')

// // console.log(chalk.blue(s))
let addN = require('./data.js')


// const { notStrictEqual } = require('assert')
const { command } = require('yargs')
let yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add note',
    builder: {
        title: {
            describe: "Add title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Add body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        // console.log(argv.title)
        addN.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'delete',
    describe: 'delete note',
    builder: {
        title: {
            describe: "Delete title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        addN.deleteNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: "Read title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        // console.log("Read command")
        addN.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list note',
    handler: () => {
        // console.log("List command")
        addN.listNote()
    }
})

yargs.command({
        command: '*',
        describe: '* matches all',
        handler: () => {
            console.log("there isn't command")
        }
    })
    // function func() {
    //     console.log("read command")
    // }
yargs.parse();