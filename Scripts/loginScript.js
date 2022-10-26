// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

   login.addEventListener('click',(e)=>{
    alert("login clicked");
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const dt = new Date();
         update(ref(database, 'users/' + user.uid),{
          last_login: dt,
        })

         alert('User loged in!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
  });

 });

// const user = auth.currentUser;
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     //bla bla bla
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     //bla bla bla
//   }
// });

// logout.addEventListener('click',(e)=>{

//    signOut(auth).then(() => {
//      // Sign-out successful.
//      alert('user loged out');
//    }).catch((error) => {
//      // An error happened.
//      const errorCode = error.code;
//      const errorMessage = error.message;

//         alert(errorMessage);
//    });

// });