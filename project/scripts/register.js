function checkUsernameLength(){
    let username = document.getElementById("username").value;

    if(username.length > 20){
        alert("Oh no. Your username is more than 20 words. Please create new username using less than 20 words. Thank you.");
    }    
    else{
        alert("Your username is valid.");
    }    
}
let elUsername = document.getElementById("username");
elUsername.onblur = checkUsernameLength;

//how to check the email have mistype of @mail.com/ or not


function checkPasswordLength(txt){
    if(txt.length < 10){
        alert("Your password is not strong enough. Make it more than 10 to make it strong.");
    }
    else{
        alert("Your password is strong.");
    }
}
let elPassword = document.getElementById("password");
elPassword.addEventListener("blur", function(){
    let a = document.getElementById("password");
    checkPasswordLength(a.value);
});

//matching it not working
function checkPasswordMatch(elPassword){
    let conpassword = document.getElementById("conpassword").value;

    if(conpassword != elPassword){
        alert("Your password is not match! Please try again.");
    }
    else{
        alert("Your password is match.");
    }
}
let elConpassword = document.getElementById("conpassword");
elConpassword.onblur = checkPasswordMatch;