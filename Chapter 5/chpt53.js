// console.log('it works?')


// EXERCISE
let myWork = [];

for (let i = 0; i <=10; i++){
    switch(i){
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
        myWork.status = true;
        break;
        case 0:
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        myWork.status = false;
        break;
    }
    myWork.push({name: `lesson ${i}`, status:myWork.status})
    console.log(myWork)

}