// Object Destructuring 

const person = {
  name: 'George',
  age: 44,
  location: {
    city: 'Denver',
    temp: 32
  }
};

const funky = ({name,age}) => {
  console.log('Name:', name, 'Age:', age);
};

funky(person);

// const {name, age} = person;

// console.log(`${name} is a ${age}`);

// const {city, temp} = person.location;

// console.log(`It's ${temp} in ${city}`)

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

// // Array Destructuring
// const address = ['1386 Dexter St.', 'Denver', 'CO', '80220'];
// console.log(`You are in ${address[1]} ${address[2]}`)

// const [street, myCity, state, zip] = address;
// console.log(`You are in ${myCity} ${state}`);

// const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
// const [coffee, , medium] = item;
// console.log(`A medium ${coffee} costs ${medium}`);