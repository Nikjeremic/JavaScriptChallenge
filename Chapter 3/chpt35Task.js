console.log('Works?')
//  Exercise
let people = {
    friends: [
        {
            name:'Stefan',
            last: 'Ramac',
            id: 1
        },
        {
            name: 'Djurdjica',
            last: 'Jeremic',
            id: 2
        },
        {
          name: 'Nikola',
          last: 'Jelic',
          id: 3  
        }
    ],
    
}

console.log(people.friends)

//  Playground and learning

let company = {
    companyName: 'Eight Code',
    acticity: ['Web Development', 'Web Design', 'Graphic Design'],
    address: [{
        street: 'Mose Pijade 6',
        city: 'Veliki Radinci',
        postalCode: 22211,
        number: 38162460969,
        state: 'Serbia',
        isActive: true
    },{
        street: 'Vuka Karadzica',
        city: 'Sremska Mitrovica',
        postalCode: 22200,
        number: 38162460969,
        state: 'Serbia',
        isActive: false
    }],
    founded: 2023
}

let companyActivity = company.acticity;
let primaryActivity = company.acticity[0]
let companyAddress = company.address;

let street1 = company.address[0].street;
let street2 = company.address[1].street;


console.log(company)
console.log(companyActivity)
console.log(primaryActivity)
console.log(companyAddress)
console.log(`Street address 1 is: ${street1}. Street address 2 is: ${street2}.`)
