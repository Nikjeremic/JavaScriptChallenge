
let inputAge = Number(prompt('Based on your Age we will provide you with the cost of the ticket'));

console.log(inputAge, typeof(inputAge))

let message;

if(inputAge >= 21){
    message = 'You can enter the party and you can get a BEER!';
} else if(inputAge >= 19){
    message = 'You can enter the party but you are not allowed to have a beer :('
} else{
    message = "'You can't even enter the party!"
}
console.log(message)
// PLAYGROUND

// let age = 10;
// let cost = 0;

// let message;

// if(age < 3){
//     cost = 0;
//     message = 'Pristup je besplatan za decu ispod 3 godine'
// } else if(age >= 3 && age < 12){
//     cost = 5;
//     message = 'Sa decijim popustom karta vas izlazi $5'
// } else if(age >= 12 && age < 65){
//     cost = 10;
//     message = 'Cena regularne karte je $10';
// } else{
//     cost = 7;
//     message = 'Karta je $7';
// }
// console.log(message)
// console.log(`Your total cost is ${cost}`)
let age = 19
let denied = age < 19 ? 'true' : 'false';

console.log(denied)