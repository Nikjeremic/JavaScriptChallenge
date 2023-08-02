// TASK
let min = 0;
let ask = String(prompt('Ask something Magic 8 Ball.'));
let randomNumber = Math.floor(Math.random() * 6);

let message = document.querySelector('.message');
let question = document.querySelector('.question')
let answer = "Magic 8 Ball answer is: "

question.textContent = `Your question is: ${String(ask)}`;
switch(randomNumber){
    case 0: message.textContent = `${answer}It is over 9000!`
    break;
    case 1: message.textContent = `${answer}I am not able to answer that`;
    break;
    case 2: message.textContent = `${answer}You are dumb`;
    break;
    case 3: message.textContent = `${answer}Ask me later, you are annoying`;
    break;
    case 4: message.textContent = `${answer}I am not sure about that`;
    break;
    case 5: message.textContent = `${answer}You Rock!!!!`
    break;
    default: message.textContent = `${answer}Ask Again ;)`
    break;

}



// PLAYGROUND

// let activity = String(prompt('What is your activity?'))
// console.log(activity)

// switch(activity){
//     case 'Get up': console.log('It is 6AM');
//     break;
//     case 'Breakfast': console.log('It is 7AM');
//     break;
//     case 'Coffe': console.log('It is 9AM');
//     break;
//     case ' Drive to work': console.log('It is 10AM');
//     break;
//     case 'Lunch': console.log('It is 1PM');
//     break;
//     case 'Drive home': console.log('It is 5PM');
//     break;
//     case 'Dinner': console.log('It is 6AM');
//     default: console.log('I cannot determine the current time.');
//     break;
// }