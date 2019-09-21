const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return "Your notes...";
}

const addNote = function(title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter( function(note) {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title, 
            body: body
        });
    
        saveNotes(notes);

        console.log(chalk.green.inverse('New note added.'));
    } else {
        console.log(chalk.red.inverse('Note title already taken.'));
    }
};

const removeNote = function(title) {
    const notes = loadNotes();

    const updatedNotes = notes.filter(function (note) {
        return note.title !== title;
    });

    if (updatedNotes.length === notes.length) {
        console.log(chalk.inverse.red('Note not found!'));
    } else {
        saveNotes(updatedNotes);
        console.log(chalk.inverse.green('Note removed!'));
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    } catch (ex) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};