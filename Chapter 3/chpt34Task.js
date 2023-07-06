// Exercise
let myCar = {
    Brand: 'Volkswagen',
    Model: 'Touran',
    Color: 'Grey',
    Year: 2008,
    Manual: true,
    Owners: ['Ljubisa Colic', 'Nikola Jeremic']
}
console.log(myCar)

let carColor = myCar.Color

console.log(carColor)
carColor = 'Black'
console.log(carColor)
let myBrand = myCar['Brand'];
console.log(myBrand)

myBrand = 'Audi'
console.log(myBrand)

let secondOwner = myCar.Owners[1]
console.log(secondOwner)

secondOwner = 'Stefan Ramac'
console.log(secondOwner)

// Playground and Learning

// let dog = {
//     dogName: 'Tobi',
//     weight: 25.6,
//     color: 'White/Grey',
//     breed: 'Husky',
//     age: 5,
//     burglarBiter: true
// }

// let dogColor = dog['color'] // Method 1
// let dogColor1 = dog.color // Method 2
// console.log(dogColor)

// console.log(dog, dogColor, dogColor1)

// dog['color'] = 'Black/white'
// dog.weight = 23.5;

// let updatedColor = dog['color'] // Update Method 1
// let updatedWeight = dog.weight // Update Method 2
// console.log(`The updated color of the dog is: ${updatedColor}, and the updated weight ${updatedWeight}`)

// console.log(dog)