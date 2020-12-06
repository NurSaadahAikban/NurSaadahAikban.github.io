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
        alert("Password accepted.");
    }
}

let elPassword = document.getElementById("password");
elPassword.onblur = checkPasswordLength;

function showPasswordLength(txt){
    if(txt.length <5){
        alert("Password must be more than 5.");
    }else{
        alert("Password accepted.");
    }
}

let elPassword2 = document.getElementById("password2");
elPassword2.addEventListener("blur", function(){
    let a=document.getElementById("password2");
    checkPasswordLength(a.value);
});