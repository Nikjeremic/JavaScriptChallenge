let prize = Number(prompt('Please put the number between 0 and 10'));
let array = ['Wish you more luck next time!', 'You rock this game, please play again!']
let answer = document.querySelector('.messige')

console.log(prize)

let mySelection = 'My Selection: ';

switch(prize){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
          answer.textContent = mySelection + array[0]
    break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        answer.textContent = mySelection + array[1]
        break;
    default: answer.textContent = 'Refresh and try number between 0 and 10'
}