const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lists your notes',
    handler: function () {
        console.log('Listing all your notes.');
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log('Reading a note.');
    }
});

yargs.parse();