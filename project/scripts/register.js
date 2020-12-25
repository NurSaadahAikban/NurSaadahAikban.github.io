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
//function checkPasswordMatch(elPassword){
    //let conpassword = document.getElementById("conpassword").value;

    //if(conpassword != elPassword){
        //alert("Your password is not match! Please try again.");
    //}
    //else{
        //alert("Your password is match.");
    //}
//}

let elConpassword = document.getElementById("conpassword");
elConpassword.onblur = checkPasswordMatch;


//x siap sbb sheety.co problem
function Register(gname, gemail,gpassword){
    let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/nsa/bookings';
    //let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/bookingApp/bookings';
  
    let body = {
      member: {
        name:gname,
        email:gemail,
        password : gpassword
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {        
        alert(json.member.name + " added");        
      });
  }
  
  window.addEventListener("load", function(){
      document.getElementById("register").addEventListener("click", function(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

  
        Register(name,email,password);
  
      });
    });