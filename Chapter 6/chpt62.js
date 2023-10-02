// console.log('Works?')

// EXERCISE
let randomNamesArr = ['Nice', 'Awesome', 'Beautiful', 'Not so Good', 'Bad man!', 'Astounding!', "It's over 9000!"]

let checkForName = function(){
    // Declaring a variables
    let askForName = prompt('What is your name?');
    let randomNumber = Math.floor(Math.random() * 6);
    // Writing it in console
    console.log(askForName + ' is' + ` ${randomNamesArr[randomNumber]}`)
}
// Calling a function
checkForName()