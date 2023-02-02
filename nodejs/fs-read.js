const fs = require("fs");
//console.log("Program Start")
//asynchronous read 
fs.readFile('notes.txt', (err, data) => {
    debugger;
    if (err) throw err;
    else {
        console.log("Asynchronous : " + data.toString())
    }
})
// console.log("-----------------")
// //synchronous read 
// let data = fs.readFileSync('notes.txt');
// console.log("Synchronous : " + data.toString())
// console.log("Program End")