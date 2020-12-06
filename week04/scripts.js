function transformUpperCase(){
    let a=document.getElementById("username");
    a.value = a.value.toUpperCase();
}

let elUsername = document.getElementById("username");
elUsername.addEventListener("keyup", transformUpperCase);

function checkPasswordLength(){
    let password = document.getElementById("password").value;
    if(password.length <5){
        alert("Password must be more than 5 characters");
    }else{
        alert("Password accepted.")
    }
}

let elPassword = document.getElementById("password");
elPassword.onblur = checkPasswordLength;