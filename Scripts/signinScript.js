// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
// const database = getDatabase(app);
const auth = getAuth();

// Your web app's Firebase configuration

// function RegisterUser(){
//   const dbRef = ref(db);

//   get(child(dbRef, "UsersList/"+username.value)).then((snapshot)=>{
//     if(snapshot.exists()){
//       alert("Account already exists!");
//     }
//     else{
//       set(ref(db, "UsersList/"+username.value),
//       {
//         username: username.value,
//         email: email.value,
//         password: password.value
//       })
//       .then(()=> {
//         alert("User added Successfully")
//       })
//       .catch((error)=>{
//         alert("error"+error);
//       })
//     }
//   })
// }

register.addEventListener('click', (e) => {

  var username = document.getElementById('Username').value;
  var email = document.getElementById('emailSignup').value;
  var password = document.getElementById('createPassword').value;
  //var confirmPassword = document.getElementById('confirmPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      const database = getDatabase(app);
      update(ref(database, 'users/' + username), {
        username: username,
        email: email
      })

      alert('user created!');

      //do not add below code, db wont update.
      //window.location.href = "login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
      // ..
    });

});
