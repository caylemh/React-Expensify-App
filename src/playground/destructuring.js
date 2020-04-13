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

const book ={
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);
