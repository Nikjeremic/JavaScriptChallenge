console.log('Works?')

// PLAYGROUND

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//     arrOfArrays.push([]);
//     for (let j = 0; j < 7; j++){
//         arrOfArrays[i].push(j);
//     }
// }

// console.table(arrOfArrays)

// EXERCISE

let myTable = [];

let counter = 0;
let tempTable = [];

for (let i = 0; i<5; i++){
    tempTable.push([])
    for(let j = 0; j<4; j++){
        tempTable[i].push(j);
    }
    console.table(tempTable)
    console.log(tempTable.findIndex[i])
}




