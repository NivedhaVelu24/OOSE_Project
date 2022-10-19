//firebase
const firebaseConfig = {
    apiKey: "AIzaSyADh8fA1NB4alt_eRKEZVewSvrDHk-_2cI",
    authDomain: "studybuddy-9ed84.firebaseapp.com",
    projectId: "studybuddy-9ed84",
    storageBucket: "studybuddy-9ed84.appspot.com",
    messagingSenderId: "998018118661",
    appId: "1:998018118661:web:e3efc07e188386b409586c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initializing Variables
const auth = firebase.auth();
const database = firebase.database();

