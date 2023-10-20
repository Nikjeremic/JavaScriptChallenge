console.log('Works?');

// PLAYGROUND

let dog = {
    dogName: 'Tobi',
    weight: 2.4,
    color: 'Black/White',
    breed: 'Husky'
}

class ClassName {
    constructor(prop1, prop2){
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
let obj = new ClassName('arg1', 'arg2')

function Cat(catName, weight, color, breed){
    this.catName = catName;
    this.weight = weight + 'kg';
    this.color = color;
    this.breed = breed;
}

let cat = new Cat('Mjau', 15, 'Black', 'Persian')

console.log(cat.weight)

class Pig {
    constructor(pigName, weight, color, breed){
        this.pigName = pigName;
        this.weight = weight + 'kg';
        this.color = color;
        this.breed = breed;
    }
}
let pig = new Pig('Beli', 84, 'White', 'Unknown')

console.log(pig.pigName, 'weighs', pig.weight)

class Person {
    constructor(firstname, lastname = 'Please enter Last Name'){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let p = new Person('Nikola', 'Jeremic')
let n = new Person('Nick')

console.log(n.firstname, n.lastname)

console.log(p.firstname, p.lastname)

// EXERCISE

class Persona{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let per = new Persona('Tobey', 'Maguire')
console.log('Hello', per.firstname, per.lastname)