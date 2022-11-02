// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

submitbtn.addEventListener('click', (e) => {

    const firebaseConfig = {
        apiKey: "AIzaSyADh8fA1NB4alt_eRKEZVewSvrDHk-_2cI",
        authDomain: "studybuddy-9ed84.firebaseapp.com",
        databaseURL: "https://studybuddy-9ed84-default-rtdb.firebaseio.com",
        projectId: "studybuddy-9ed84",
        storageBucket: "studybuddy-9ed84.appspot.com",
        messagingSenderId: "998018118661",
        appId: "1:998018118661:web:e3efc07e188386b409586c"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //const database = getDatabase(app);

    var course = document.getElementById('course').value;
    var instructor = document.getElementById('instructor').value;
    var Days = document.getElementById('Days').value;
    var timeFrom = document.getElementById('timeFrom').value;
    var timeTo = document.getElementById('timeTo').value;

    const database = getDatabase(app);
    update(ref(database, 'users/'), {
        course: course,
        instructor: instructor,
        Days: Days,
        timeFrom: timeFrom,
        timeTo: timeTo
    })
    alert("Updated");

    // function writeUserData() {
    //     const db = getDatabase();
    //     update(ref(db, 'users/' + user.uid), {
    //         course: course,
    //         instructor: instructor,
    //         Days: Days,
    //         timeFrom: timeFrom,
    //         timeTo: timeTo
    //     })
    // }
    // writeUserData();
});


