console.log('Does it works?')

// PLAYGROUND
function addingTwoNumbers(param1 = 3, param2 = 6){
    console.log(param1 + param2)
}
addingTwoNumbers()
addingTwoNumbers(6, 5)
addingTwoNumbers(10)

let arrowFunction = (arg1, arg2) => console.log(arg1 + arg2)

arrowFunction('Great! ', 23)

const arr = ['Nikola', 'Ned', 'Singh']
arr.forEach(e => console.log(e))

let spread = ['so', 'much', 'fun'];
let message = ['Javascript', 'is', ...spread, 'and', 'very', 'powerful'];

console.log(message.join(' '))

const arr1 = [1, 2]
const arr2 = [5, 6]

let letsAddIt = (para1, para2, para3, para4) => {
    let result = '';
    return console.log(result = (para1 + para2) - (para3 + para4))
}

letsAddIt(...arr1, ...arr2)


// EXERCISE
