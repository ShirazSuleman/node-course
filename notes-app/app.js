const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    handler: function () {
        console.log('Adding a new note.');
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function () {
        console.log('Removing a note.');
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

console.log(yargs.argv);