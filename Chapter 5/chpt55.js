// PLAYGROUND

let arr = ['Chantal', 'John', 'Maxime', 'Bobbi', 'Jair'];
// for (let i = 0; i <arr.length; i++){
//     console.log(arr[i])
//     arr[i] = 'Welcome ' + arr[i]
//     console.log(arr[i])
// }

for(let n = 0; n < arr.length; n++){
    if (arr[n].startsWith('M')){
        delete arr[n];
        continue;
    }
    arr[n] = 'Welcome ' + arr[n]
}
console.log(arr)

// EXERCISE
let myArr = []
const row = [];


for (let i = 0; i < 65; i++){
    myArr.push([])
    console.log(myArr)
    for(let m = 0; m < 4; m++){
        myArr[i].push(m)
        console.table(myArr)
    }
    
}
// Not completed, I will get back once i cover functions.
