var nameVar = 'Diana';
var nameVar = 'Paola';
console.log('nameVar', nameVar);

let nameLet = 'Diana';
nameLet = 'Manzano';
console.log('nameLet', nameLet);

const nameConst = 'Vale';
console.log('nameConst', nameConst);

//Block Scoping

//let can be reassigned
//const can never be reassigned
const fullName = 'Diana Manzano';
let firstName;

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);