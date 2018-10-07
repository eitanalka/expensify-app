import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAmp1FVlDDxBD_FEfjTqjG4chS1PoKzcsg",
  authDomain: "expensify-54304.firebaseapp.com",
  databaseURL: "https://expensify-54304.firebaseio.com",
  projectId: "expensify-54304",
  storageBucket: "expensify-54304.appspot.com",
  messagingSenderId: "602864283980"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//   description: '1',
//   note: '1',
//   amount: 5000,
//   createdAt: 0
// });

// database.ref('notes/-LOFAAFMeSLXoWxvCI3m').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     jjfkadsfl: {
//       title: 'First note',
//       body: 'This is a note'
//     },
//     dafdsfds: {
//       title: 'Another note!',
//       body: 'This is my note'
//     }
//   }
// };

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })

// database.ref().set({
//   name: 'eitan',
//   age: 19,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Indianapolis',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });