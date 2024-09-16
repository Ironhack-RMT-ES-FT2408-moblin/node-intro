console.log("ejecutando JS")

let miVariable = 0;

miVariable += 20

console.log(miVariable)


// const exportedData = require("./data.js") 
import exportedData from "./data.js"
// 1. ejecuta el archivo en este lugar
// 2. (opcional) recibe lo que ese archivo esté exportando

console.log(exportedData)