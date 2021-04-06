import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBvRf_KGkXusC8xR8y_086DsMitwXy91TE",
    authDomain: "linkin-3f9d0.firebaseapp.com",
    projectId: "linkin-3f9d0",
    storageBucket: "linkin-3f9d0.appspot.com",
    messagingSenderId: "594695046790",
    appId: "1:594695046790:web:402e87974749a3af263307"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export {db};