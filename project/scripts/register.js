//UPPERCASE
function transformUpperCase(){
  let name=document.getElementById("name");
  let address=document.getElementById("address");
  let city =document.getElementById("city");
  let state = document.getElementById("state");
 
  name.value = name.value.toUpperCase();
  address.value = address.value.toUpperCase();
  city.value = city.value.toUpperCase();
  state.value = state.value.toUpperCase();
}

let elName = document.getElementById("name");
let elAddress = document.getElementById("address");
let elCity = document.getElementById("city");
let elState = document.getElementById("state");

elName.addEventListener("keyup",transformUpperCase);
elAddress.addEventListener("keyup",transformUpperCase);
elCity.addEventListener("keyup",transformUpperCase);
elState.addEventListener("keyup",transformUpperCase);

//check length of mobile number
function checkMobileLength(){
  let phone = document.getElementById("phone").value;
  if(phone.length <10){
    alert("Your mobile number is less than 10 digit.");
  }
  else if(phone.length > 11){
    alert("Your mobile number is more than 11 digits");
  }  
}
let elPhone = document.getElementById("phone");
elPhone.onblur = checkMobileLength;

//check length of mobile number
function checkPoscodeLength(){
  let poscode = document.getElementById("poscode").value;
  if(poscode.length <5){
    alert("Your poscode is less than 5 digit.");
  }
  else if(poscode.length > 5){
    alert("Your poscode is more than 5 digits");
  }  
}
let elPoscode = document.getElementById("poscode");
elPoscode.onblur = checkPoscodeLength;

//fetch
function Register(gname, gemail,gphone,gaddress,gcity,gstate,gposcode){
  let url = 'https://api.sheety.co/7b9172ba5421780439c0e82967bca59f/nsaProject/members';
  let body = {
    member: {
        name:gname,
        email:gemail,
        phone: gphone,
        address:gaddress,
        city:gcity,
        state:gstate,
        poscode:gposcode
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
        alert("Congratulation, " + json.member.name + ". You are successfully added in our member list.");        
      });
  }
  
  window.addEventListener("load", function(){
      document.getElementById("member").addEventListener("click", function(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value;
        let city = document.getElementById("city").value;
        let state = document.getElementById("state").value;
        let poscode = document.getElementById("poscode").value;
  
        Register(name,email,phone,address,city,state,poscode);
  
      });
    });