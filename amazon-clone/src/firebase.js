import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB191lvgcusiTx5lFz3y7ohmFb3ZMw-sqU",
    authDomain: "clone-6ae1d.firebaseapp.com",
    projectId: "clone-6ae1d",
    storageBucket: "clone-6ae1d.appspot.com",
    messagingSenderId: "290987952511",
    appId: "1:290987952511:web:c09671addea90be007724a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };