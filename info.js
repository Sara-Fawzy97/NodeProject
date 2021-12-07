const { json } = require("stream/consumers")

let student = {
    Fname: "Sara",
    age: '25'
}

let studentJson = JSON.stringify(student);

// console.log(studentJson);
let fs = require('fs');
fs.writeFileSync('Students.json', studentJson)
let data = fs.readFileSync('students.json')
console.log(data.toString())

let studentObj = JSON.parse(data)

console.log(studentObj)

studentObj.Fname = "Mohamed"
console.log(studentObj)

fs.writeFileSync('Students.json',
    JSON.stringify(studentObj)
)