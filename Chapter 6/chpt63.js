// console.log('works?')

// PLAYGROUND

// function tester(para1, para2){
//     return para1 + " " + para2;
// }

// const arg1 = 'Nikola';
// const arg2 = 'Jeremic';

// console.log(tester(arg1, arg2))

// // PLAYGROUND 2

// function addTwoNumbers(x, y){
//     console.log(x + y)
// }
// const ex =  5;
// const yps = 9
// console.log(addTwoNumbers(ex, yps))

// // New one
// let argumet = String(prompt('Input your argument'))

// let arr = [];

// arr.push(argumet)

// console.log(arr)

// EXERCISE
let firstNumber = Number(document.querySelector('.firstNumber').value)
let secondNumber = Number(document.querySelector('.secondNumber').value)

let output = document.querySelector('.output')
let operator = '-';

console.log(typeof(firstNumber))
console.log(firstNumber)


function myCalculator(param1, param2, operators){

    if(operators === '-'){
        let result = Number(param1) - Number(param2)
        return output.textContent = `${result}`
    }
    else {
        let result = Number(param1) + Number(param2)
    return output.textContent = `${result}`
    }
    

}

console.log(myCalculator(firstNumber, secondNumber, operator))