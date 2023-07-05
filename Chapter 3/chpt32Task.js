//Exercise

let newArray = []
console.log(newArray)

newArray.splice(0, 0, 'Milk', 'Bread', 'Apples')
console.log(newArray)

newArray.splice(1, 1, 'Bananas', 'Eggs')
console.log(newArray)

console.log(newArray.pop())
console.log(newArray.sort())

console.log(newArray.indexOf('Milk'))
newArray.splice(1, 0, 'Juice', 'Pop')
console.log(newArray[1] = 'Carrots', newArray[2] = 'Lettuce')
console.log(newArray)

let newArray1 = ['Juice', 'Pop']
let myNewList = newArray.concat(newArray1, newArray1)

console.log(myNewList)

let lastPopIndex = myNewList.lastIndexOf('Pop')
console.log(lastPopIndex)




//Learning and Trying

// let favoriteFruits = ['grapefruit', 'lemon', 'peach', 'bananas']

// favoriteFruits.push('ananas') // adding at the end of array new item
// console.log(favoriteFruits)

// favoriteFruits.splice(3, 0, 'oranges', 'mangos') // at index 3 we are adding oranges and mangos, which will push others for one index each

// console.log(favoriteFruits)

// favoriteFruits.splice(2, 2, 'avocado', 'apple') // we are adding avocado and apple at index 2 and we are removing the next 2 which are peach and oranges
// console.log(favoriteFruits)

// let favoriteVegetables0 = ['potato', 'tomato', 'beans']

// let favoriteVegetables1 = ['onion', 'cabbage', 'cucumber']

// let vegetablesMerged = favoriteVegetables0.concat(favoriteVegetables1); // we are merging favoriteVegetables1 with favoriteVegetables0 and we assign it as a new array to variable called vegetablesMerged

// console.log(vegetablesMerged);

// vegetablesMerged.pop() // deletes last element from the array (cucumber)

// console.log(vegetablesMerged)

// vegetablesMerged.shift() // deletes first element from the array (potato)
// console.log(vegetablesMerged)

// let findCabbage = vegetablesMerged.find(function(e){return e === 'cabbage'});
// let findCabbageIndex = vegetablesMerged.indexOf('cabbage')
// console.log(findCabbage, findCabbageIndex)