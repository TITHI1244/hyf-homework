// NOnoN0nOYes (Note taking app)
const notes = [];

// Save a note
function saveNote(content, id) {
    let noteObject = {};
    noteObject.content = content;
    noteObject.id = id;
    notes.push(noteObject);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

// Get a note
function getNote(id) {
    let noteIndex;
    let noteContent = "";
    if((id === undefined) || (typeof(id) !== 'number')) {
        noteContent = "Please enter a valid id first!!!";
    } else {
        for(let i = 0; i <= notes.length; i++) {
            if(noteIndex !== undefined) {
                break;
            } else if((noteIndex === undefined) && (i === notes.length)) {
                noteContent = "No note exists for this id";
                return noteContent;
            } else {
                for(const [key, value] of Object.entries(notes[i])) {
                    if(value === id) {
                        noteIndex = i;
                        break;
                    }
                } 
            }    
        }
        noteContent = notes[noteIndex].content; 
    }
    return noteContent;
}
console.log(getNote(-10));

// Log out notes
function logOutNotesFormatted() {
    for(let i = 0; i < notes.length; i++) {
        let noteId;
        let noteContent;
        for(const [key, value] of Object.entries(notes[i])) {
            if(key === "content") {
                noteContent = value;
            } else if(key === "id") {
                noteId = value;
            } 
        } console.log(`The note with id: ${noteId}, has the following note text: ${noteContent}`);
    } 
}
logOutNotesFormatted(); 

// a new feature for removing a note, when the task is done.
function deleteFinishedTask(id) {
    let noteIndex;
    for(let i = 0; i < notes.length; i++) {
        if(noteIndex === undefined) {
            for(let [key, value] of Object.entries(notes[i])) {
                if((key === "id") && (value === id)) {
                    noteIndex = i;
                    break;
                }
            }
        } 
    }
    notes.splice(noteIndex, 1);
    return notes;
}
console.log(deleteFinishedTask(1));