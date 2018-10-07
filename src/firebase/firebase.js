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

database.ref().set({
  name: 'eitan',
  age: 19,
  isSingle: true,
  location: {
    city: 'Indianapolis',
    country: 'United States'
  }
});

// database.ref().set('This is data');

database.ref('age').set(20);
database.ref('location/city').set('Houston');
database.ref('attributes').set({
  height: 20,
  weight: 400
});