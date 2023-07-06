// Exercise
let numberArray = [1, 2, 3];

let numbersList = [numberArray, numberArray, numberArray];

console.log(numbersList, numbersList[1][1])

// Practice

let pets = ['Dog', 'Cat', 'Batt'];
let names = ['Tobi', 'Lasley', 'John'];
let ages = [6, 3, 2];

let animals = [pets, names, ages]
console.log(animals)

let lasley = animals[1].find(e => e == 'Lasley') // finding lasley in second array

let accessLasley = animals[1][1] // Or you can access it this way
console.log(lasley, accessLasley)