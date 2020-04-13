//
//Object Destructuring
//

// const person = {
//     name:'Caylem',
//     age: 36,
//     location: {
//         city: 'Johannesburg, RSA',
//         temp: 15
//     }
// };

// const {name: firstName ='Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const{city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

const address = ['1299 S Junioer Street', 'Johannesburg', 'Gauteng', '2001'];
const [, city, province = 'Limpopo'] = address;
console.log(`You are in ${city}, ${province}.`);

const item = ['Hot Coffee', 'R19,00', 'R21,00', '25,00'];
const [name, , medium] = item;
console.log(`A Medium ${name} costs ${medium}.`)