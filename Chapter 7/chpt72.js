// class Person {
//     #fname
//     #lname
//     constructor(fname, lname){
//         this.#fname = fname;
//         this.#lname = lname;

//     }
//     greet(){
//         console.log("Hi there! I'm", this.fname, this.lname)
//     }
//     compliment(name, object){
//         return "that's a wonderful " + object + ", " + name
//     }
    
// }

// // console.log(compliment)

// p.greet()

// Testing

class Fullname {
    #firstname
    #lastname
    
    constructor(firstname, lastname) {
        if(firstname.startsWith('M')){
            this.#firstname = firstname;
        } else {
            this.#firstname = 'M' + firstname
        }
        this.#lastname = lastname;

    }

}

console.log(c.firstname)
