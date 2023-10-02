// playground

function sayHello(){
    let you = prompt('What is your name?')
    console.log('Hello ' + you)
}

sayHello()


let letContainingFunction = function (){
    let letInFunction = "I'm in a function.";
    console.log('Hi there!', letInFunction) 
}
letContainingFunction()

// EXERCISE

let sumTwoNumbers = function(){
    let a = 1;
    let b = 3;
    let result = a + b;
    console.log(result)
}
sumTwoNumbers()