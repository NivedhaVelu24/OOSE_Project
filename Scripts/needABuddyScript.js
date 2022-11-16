// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, set, ref, update, child, get } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyADh8fA1NB4alt_eRKEZVewSvrDHk-_2cI",
    authDomain: "studybuddy-9ed84.firebaseapp.com",
    databaseURL: "https://studybuddy-9ed84-default-rtdb.firebaseio.com",
    projectId: "studybuddy-9ed84",
    storageBucket: "studybuddy-9ed84.appspot.com",
    messagingSenderId: "998018118661",
    appId: "1:998018118661:web:e3efc07e188386b409586c"
};

submitbtn.addEventListener('click', (e) => {

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //const database = getDatabase(app);
    var username = document.getElementById('username').value;
    var course = document.getElementById('course').value;
    var days = document.getElementById('days').value;
    var time = document.getElementById('time').value;
    var ampm = document.getElementById('ampm').value;


    const database = getDatabase(app);

    const auth = getAuth();
    const user = auth.currentUser;



    if (user) {
        update(ref(database, 'NeedABuddy/' + username), {
            course: course,
            days: days,
            time: time,
            AmPm: ampm
        })
        alert("Updated");
        // ...
    }

    var check = course + days + time + ampm
    alert(check);

    var obj = [];
    var check2
    const dbRef = ref(getDatabase());
    get(child(dbRef, "IAmBuddy")).then((snapshot) => {
        // if (snapshot.exists()) {
        //     console.log(snapshot.val());
        //     console.log("snapshot", snapshot);

        // } else {
        //     console.log("No data available");
        // }
        snapshot.forEach(function(element){
            // console.log(element.val());
            obj.push(element.val());
        });

        console.log("obj: ", obj);
        for (let i = 0; i < obj.length; i++) {
            check2 = obj[i].course + obj[i].days + obj[i].time + obj[i].AmPm;
            // console.log("inside for");
            // console.log(obj[i].course);
            // console.log(check);
            // console.log(check2);


            if (check == check2) {
                // console.log("true");
                //enter details to be displayed here.
                // console.log("before display");
                console.log("contact - ", obj[i].email); 
            }
            else {
                // console.log("mismatch")
                console.log(`other instructors -   ${obj[i].email}, ${obj[i].course}, ${obj[i].days}, ${obj[i].time}, ${obj[i].AmPm} `);
            }

        }
        

    }).catch((error) => {
        console.error(error);
    });

});