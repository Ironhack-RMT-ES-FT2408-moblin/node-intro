import cows from 'cows';

const cowsArr = cows()

const cowRandomIndex = Math.floor( Math.random() * cowsArr.length )

console.log(cowsArr[cowRandomIndex])