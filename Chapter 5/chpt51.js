// console.log('works?')

// PLAYGROUND

// let someArray = ['Mike', 'Antal', 'Marc', 'Emir', 'Louiza', 'Jacky'];
// let notFound = true;

// while (notFound && someArray.length > 0){
//     if (someArray[0] === 'Louiza'){
//         console.log('FOUND HER!');
//         notFound = false;
//     } else{
//         someArray.shift()
//     }
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;

// fibonacciArray = [];

// while (fibonacciArray.length < 25){
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
//     console.log(fibonacciArray)
// }



// EXERCISE

let max = Number(prompt('Input your Number.'));

let randomNumber = Math.floor(Math.random() * max);

console.log(max, randomNumber);

let inq = false;

while (max >= 1 && max <= 5) {
    if (max === randomNumber) {
        console.log('You are the lucky one!');
        break;
    } else if (max > randomNumber) {
        console.log('You missed for ' + (max - randomNumber));
        location.reload(true)
        break;
        
    } else {
        console.log('Error');
        break;
    }

    // max = Number(prompt('Input your Number.'));
    // randomNumber = Math.floor(Math.random() * max);
}
