// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCIq9xD1CWb-npUXp0GF6kFI5cTXjrlbW0',
  authDomain: 'fb-messenger-clone-ae431.firebaseapp.com',
  databaseURL: 'https://fb-messenger-clone-ae431-default-rtdb.firebaseio.com',
  projectId: 'fb-messenger-clone-ae431',
  storageBucket: 'fb-messenger-clone-ae431.appspot.com',
  messagingSenderId: '174711075799',
  appId: '1:174711075799:web:0715b7a6fa4a7094f1d192',
  measurementId: 'G-15SEV996F6',
});

const db = firebaseApp.firestore();

export default db;
