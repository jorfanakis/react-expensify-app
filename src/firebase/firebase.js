import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed event subscription
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed event subscription
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('Changed', snapshot.key, snapshot.val());
// });

// // child_added event subscription
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('Added', snapshot.key, snapshot.val());
// });

// database.ref().set({
//   name: 'George Orfanakis',
//   age: 44,
//   stressLevel: 6,
//   job: { 
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Denver',
//     country: 'Murica'
//   }
// }).then(() => {
//   console.log('Data was set');
// }).catch((e) => {
//   console.log('Error!', e);
// });

// Remove
// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Removed is single');
// })
// .catch((e) => {
//   console.log('Failed to remove isSingle');
// });

// Update
// Doesn't work
// database.ref().update({
//   job: 'Manager',
//   location: {
//     city: 'Portland'
//   }
// }).then(() => {
//   console.log('Data was updated!');
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('Data was updated');
// });

// Onetime get
// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data");
//   });

// Listen for data changes with subscriptions
// const onAgeChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (e) => {
//   console.log('Error fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onAgeChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// Arrays
// database.ref('notes')
//   .push({
//     title: 'Course Topics',
//     body: 'React, Angular and Vue'
//   })
//   .then(() => {

//   });

//database.ref('notes/-L6Y7OJaPkoJrwkY_lZk').update({ body: 'buy food'});

// Set 3 expenses
// database.ref('expenses')
//   .push({
//     amount: 19500,
//     createdAt: moment(0).subtract(1, 'days').valueOf(),
//     description: 'Monster truck tickets',
//     note: 'Who doesn\'t like monster trucks?'
//   })
//   .then((d) => {
//     console.log('Good push 1', d);
//   });

// Pull data
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// Challenge
// Create subscription to create array list of expenses on any change
// const onExpenseChange = database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   },
//   (e) => {
//     console.log('Error fetching', e);
//   });