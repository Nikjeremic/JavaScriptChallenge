let inches = document.querySelector('.inches')
let funt = document.querySelector('.funt')
const result = document.querySelector('.result')
let button = document.querySelector('.btn')

let inToNum = Number(inches.value)
let fuToNum = Number(funt.value)

const cm = 2.54;
const kg = 0.409517;

button.addEventListener('click', function(){
    let h1Height = document.createElement('h1');
    let h1Weight = document.createElement('h1');
    let cmHeight = inToNum * cm;
    let kgWeight = fuToNum * kg;

    h1Height.textContent = `Your Height in Centimeters is: ${cmHeight}`
    h1Weight.textContent = `Your Weight in Kilograms is: ${kgWeight}`
    h1Height.classList.add('h1')
    h1Weight.classList.add('h1')
    result.appendChild(h1Height)
    result.appendChild(h1Weight)


})

console.log(inToNum, fuToNum)