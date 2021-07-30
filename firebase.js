import * as firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.SECRET_KEY,
    authDomain: "plant-care-sheet.firebaseapp.com",
    databaseURL: "https://plant-care-sheet-default-rtdb.firebaseio.com",
    projectId: "plant-care-sheet",
    storageBucket: "plant-care-sheet.appspot.com",
    messagingSenderId: "305858191908",
    appId: "1:305858191908:web:fcbad6412a9ea23934eeb1",
    measurementId: "G-LFFCL8M3FR"
};

// export default !firebase.apps.length
export default ! (firebase.apps && firebase.apps.length)
    ? firebase.default.initializeApp(firebaseConfig)
    : firebase.app();
