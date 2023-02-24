// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// import firebase from "@firebase/app-compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// availability.addEventListener('click', (e) => {


    const firebaseConfig = {
        apiKey: "AIzaSyADh8fA1NB4alt_eRKEZVewSvrDHk-_2cI",
        authDomain: "studybuddy-9ed84.firebaseapp.com",
        databaseURL: "https://studybuddy-9ed84-default-rtdb.firebaseio.com",
        projectId: "studybuddy-9ed84",
        storageBucket: "studybuddy-9ed84.appspot.com",
        messagingSenderId: "998018118661",
        appId: "1:998018118661:web:e3efc07e188386b409586c"
    };


    // var firebaseRef = firebase.database().ref("IAmBuddy");
    // firebaseRef.once("value", function (snapshot) {
    //     var data = snapshot.val();
    //     for (let i in data) {
    //         console.log(data[i]);
    //     }
    // })

    // Get a database reference to our posts
    const db = getDatabase();
const dbref = db.ref('https://studybuddy-9ed84-default-rtdb.firebaseio.com/IAmBuddy');

    // Attach an asynchronous callback to read the data at our posts reference
    dbref.on('value', (snapshot) => {
        console.log(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
    }); 



// });