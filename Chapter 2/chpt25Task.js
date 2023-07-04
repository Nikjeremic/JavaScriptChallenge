console.log('works?')

const mile = 1.60934;

let km = Number(prompt('How much KM do you want to convert into Miles?'))

let miles = km * mile;

const message = `The distance of ${km} kms is equal to ${miles}`;

console.log(`The distance of ${km} kms is equal to ${miles}`)

var h1 = document.createElement('h1')

h1.textContent = message;

document.body.appendChild(h1)