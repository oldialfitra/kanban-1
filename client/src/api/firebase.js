import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAJwf8sic-X8K3_CRdt_f6GOFRyS72R638',
  authDomain: 'kanban-new.firebaseapp.com',
  databaseURL: 'https://kanban-new.firebaseio.com',
  projectId: 'kanban-new',
  storageBucket: 'kanban-new.appspot.com',
  messagingSenderId: '800237937110',
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
