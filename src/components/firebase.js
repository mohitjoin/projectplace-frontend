// import firebase from 'firebase/compat/app';
// import "firebase/compat/auth"
// Initialize Firebase
//const app = initializeApp(firebaseConfig);


import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const config = {
        // apiKey: process.env.Apikey,
        // authDomain: process.env.authDomain,
        // projectId: process.env.projectId,
        // storageBucket: process.env.StorageBucket,
        // messagingSenderId: process.env.MessagingSenderId,
        // appId: process.env.AppId,
        // measurementId: process.env.MeasurementId
        apiKey: "AIzaSyDOex2b8G0hl_HeoxtgodaeGmX6IQoT5Gk",
        authDomain: "projectplace-ad100.firebaseapp.com",
        projectId: "projectplace-ad100",
        storageBucket: "projectplace-ad100.appspot.com",
        messagingSenderId: "297115537869",
        appId: "1:297115537869:web:2fe2bfd7326f38c841b484",
        measurementId: "G-Q1K6C0D9K9"
    }
    // firebase.initializeApp(config)
    // const auth = firebase.auth()
    // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    // export { firebase }






const firebaseDB = firebase.initializeApp(config);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };