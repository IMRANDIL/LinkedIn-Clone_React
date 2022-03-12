import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1cx0o_fpBSwYk3APsAqwQPRAtjmM8B68",
    authDomain: "linkedin-clone-5116e.firebaseapp.com",
    projectId: "linkedin-clone-5116e",
    storageBucket: "linkedin-clone-5116e.appspot.com",
    messagingSenderId: "473448786531",
    appId: "1:473448786531:web:eb2c8409a9068d7d876656"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };