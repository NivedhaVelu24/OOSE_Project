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


// Login info
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");


form.addEventListener('submit', (e) => {
    let messages = [];
    if (email.value === ''|| email.value == null){
        messages.push("email is required");
    }
    
    if(password.value.length <= 8){
        alert("Password must be longer than 8 characters");
    }

    if(messages.length > 0){
    e.preventDefault();
    error.innerText = messages.join(', ');
    }
})

//SignUp
function register(){
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const semester = document.getElementById("semester").value;
    const emailSignup = document.getElementById("emailSignup").value;
    const passwordSignUp = document.getElementById("createPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(validate_email(emailSignup)==false||validate_password(passwordSignUp)==false){
        alert("Email or Password invalid!");
        return;
        //dont continue running the code
    }
    if(validate_field(firstname)==false||validate_field(lastname)==false){
        alert("First Name or Last Name is invalid!");
    }

    auth.createUserWithEmailAndPassword(emailSignup, passwordSignUp)
    .then(function(){
        //declare user variable
        var user = auth.currentUser;

        //add user to database
        var database_ref = database.ref();

        //create user data
        var user_data = {
            email : email,
            firstname : firstname,
            lastname : lastname,
            semester : semester,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data);
        alert('User Created');

    })
    .catch(function(error){

        var error_code = error.code;
        var error_message = error.message;

        alert(error_message);
    })
}

function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true){
        return true;
    } else{
        return false;
    }
}

function validate_password(password){
    if(password<6){
        return false;
    } else{
        return true;
    }
}

function validate_field(field){
    if(field == null){
        return false;
    } 
    if(field <= 0){
        return false;
    }
    else{
        return true;
    }
}


