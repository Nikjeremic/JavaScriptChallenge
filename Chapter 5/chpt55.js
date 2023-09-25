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
