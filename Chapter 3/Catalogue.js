console.log('Works?')

let stock = [
    {
        name:'Plazma keks',
        price: 1.63,
        quantity: 200
    },
    {
        name: 'Coca-Cola',
        price:  1.20,
        quantity: 80,
        similarity:[
            'Fanta',
            'Sprite',
            'SevenUp'
        ]
    },
    {
        name: 'Beer',
        price: 0.52,
        quantity: 530
    }
]

console.log(stock)
console.log(`You are looking for ${stock[0].name}. Price is: $${stock[0].price}. We have ${stock[0].quantity} pieces left`)
let updatedPrice = stock[2].price;

updatedPrice = 0.55;
let similar = stock[1].similarity;
similar.pop()
similar.push('Schweppes')
console.log(similar.find(e => e === 'Fanta'), similar.indexOf('Fanta'))
console.log(stock[1].similarity)
// similar.pop()
console.log(`You are looking for ${stock[2].name}. Price is: $${updatedPrice}. This is a new price, we had to update it, the old one was $0.52. We have ${stock[2].quantity} pieces left`)