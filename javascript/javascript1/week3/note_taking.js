// NOnoN0nOYes (Note taking app)
const notes = [];

// Save a note
function saveNote(content, id) {
    let noteObject = {
        content: content,
        id: id
    };
    notes.push(noteObject);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

// Get a note
function getNote(id) {
    let noteIndex;
    if((id === undefined) || (typeof(id) !== 'number')) {
        return "Please enter a valid id first!!!";
    } else {
        for(let i = 0; i <= notes.length; i++) {
            if((noteIndex === undefined) && (i === notes.length)) {
                return "No note exists for this id";
            } else {
                if(notes[i].id === id) {
                    noteIndex = i;
                    break;
                }
            }    
        }
        return notes[noteIndex].content; 
    }
}
console.log(getNote(1));

// Log out notes
function logOutNotesFormatted() {
    for(let note of notes) {
        let noteId = note.id;
        let noteContent = note.content;
        console.log(`The note with id: ${noteId}, has the following note text: ${noteContent}`);
    }
}
logOutNotesFormatted(); 

// a new feature for removing a note, when the task is done.
function deleteFinishedTask(id) {
    let noteIndex;
    for(let i = 0; i < notes.length; i++) {
        if(notes[i].id === id) {
            noteIndex = i;
            break;
        }
    }
    notes.splice(noteIndex, 1);
    return notes;
}
console.log(deleteFinishedTask(1));