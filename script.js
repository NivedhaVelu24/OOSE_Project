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



// function validate(){
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");



//     if(email.value.trim() == ""||password.value.trim() == ""){
//         alert("Enter email and password");
//         return false;
//     }

// }