let userName = String(prompt('Input your name and see if you are my friend'))

let messoge = document.querySelector('.messoge')

console.log(typeof(userName), userName)

switch(userName) {
    case 'Nikola':
    case 'Milan':
    case 'Natasa':
    case 'Djurdjica':
    case 'Nenad':
    case 'Stefan':
        messoge.textContent = 'Hey my brother!'
    break;
    case 'Natasa':
        messoge.textContent = 'Hey my wife!'
    break;
    case 'Aleksandar':
    case 'Milos':
    case 'Igor':
    case 'Dragana':
    case 'Sasa':
        messoge.textContent = 'Hey my enemy!'
    break;
    default: messoge.textContent = "I don't even know you.."
    break;
}
