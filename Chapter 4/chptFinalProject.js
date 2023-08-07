// CHEKING IF JS IS CONNECTED
console.log('works?')

// START OF THE PROJECT

let roScPa = ['Rock', 'Scissors', 'Paper'];

let maxNum = 3;

let randomNum = Math.floor(Math.random() * 3)

console.log(roScPa[randomNum]) // cheking if random choosing from array works fine.

let usersChoice = String(prompt('Choose what you will show (Rock, Scissors or Paper)')); //

console.log(usersChoice)

let userChoice = [];

userChoice.push(usersChoice)

console.log(userChoice)

let messageForUser = document.querySelector('.messoge')

// let firstLetter = usersChoice[0];

// let firstLetterBig = firstLetter.camelCase();


// // console.log(firstLetterBig)
// console.log(firstLetter, firstLetterBig, userChoice)

if (roScPa[randomNum] === userChoice[0]){
    messageForUser.textContent = "It is Equal, reload and let's play another round!"

} else if (roScPa[randomNum] === 'Rock' && userChoice[0] === 'Scissors'){
    messageForUser.textContent = "I win bro, reload and let's shoot another round!"
} 
else if (roScPa[randomNum] === 'Rock' && userChoice[0] === 'Paper'){
    messageForUser.textContent = "You win! I want another round! Reload."
}
  else if (roScPa[randomNum] === 'Paper' && userChoice[0] === 'Scissors'){
    messageForUser.textContent = "You win! I want another round! Reload."
}
else if (roScPa[randomNum] === 'Paper' && userChoice[0] === 'Rock'){
    messageForUser.textContent = "I win bro, reload and let's shoot another round!"
}
else if (roScPa[randomNum] === 'Scissors' && userChoice[0] === 'Paper'){
    messageForUser.textContent = "I win bro, reload and let's shoot another round!"
}
else if (roScPa[randomNum] === 'Scissors' && userChoice[0] === 'Rock'){
    messageForUser.textContent = "You win! I want another round! Reload."
}
else{
    messageForUser.textContent = "Choose beetween Rock, Scissors and Paper! Reload."
}