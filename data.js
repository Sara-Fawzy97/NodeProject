// let Fname = "Mohamed"
// let Lname = "Fawzy"

// let sum = (x, y) => {
//     return x + y
// }
// console.log(z)

// module.exports = {
//     Fname: Fname,
//     Lname: Lname,
//     z: z
// }

let fs = require('fs');
const { title } = require('process');
// const { title } = require('process')

// let addNote = (tilte, body) => {
//     let notes = loadNote()
//     notes.push({
//         title: title,
//         body
//     })
//     saveNotes(notes)
// }

let addNote = (title, body) => {
    let notes = loadNote();

    let duplicatedTtles = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicatedTtles.length === 0) {
        notes.push({
            title,
            body,
        })
        saveNotes(notes)
        console.log("Saved Successfully")
    } else {
        console.log("Error")
    }


}

let loadNote = () => {
    try {
        let readData = fs.readFileSync("notes.json").toString()
        return JSON.parse(readData)

    } catch (e) {
        return [];
    }
}

let saveNotes = (notes) => {
    let saveData = JSON.stringify(notes);
    fs.writeFileSync("notes.json", saveData);
};


let deleteNotes = (title) => {
    let notes = loadNote();
    let keepedData = notes.filter((note) => {
        return note.title != title
    });

    console.log(keepedData);
    saveNotes(keepedData);
    console.log("Removed")
}

let readNote = (title) => {

    let notes = loadNote()
    let readednNote = notes.find((note) => {
        return note.title === title
    })
    if (note) {
        console.log(note)
    } else {
        console.log("Not Exist")
    }
}

let listNote = () => {
    let notes = loadNote();

    notes.forEach((note) => {
        console.log(note.body)
    });

}

module.exports = {
    addNote,
    deleteNotes,
    readNote,
    listNote
};