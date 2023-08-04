let userNum = Number(prompt('Enter your number and see if it is smaller, bigger or equal to random number from 0 to 10'))
let messoge = document.querySelector('.messoge')

console.log(userNum)

let generatedNumber = Math.floor(Math.random() * 10)

console.log(generatedNumber)

if (userNum === generatedNumber){
    messoge.textContent = 'Equal!'
} else if (userNum < generatedNumber){
    messoge.textContent = 'Your Number is smaller then Generated number!'
} else if (userNum > generatedNumber){
    messoge.textContent = 'Your Number is bigger then  Generated number!'
} else {
    messoge.textContent = 'Choose'
}