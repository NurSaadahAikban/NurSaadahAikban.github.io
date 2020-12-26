function checkUsernameLength(){
    let name = document.getElementById("name").value;

    if(name.length > 20){
        alert("Oh no. Your username is more than 20 words. Please create new username using less than 20 words. Thank you.");
    }    
    else{
        alert("Your username is valid.");
    }    
}
let elName = document.getElementById("name");
elName.onblur = checkUsernameLength;

//x siap sbb sheety.co problem
function Register(gname, gemail,gphone,gaddress,gcity,gstate,gposcode){
  let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/memberNsa/members';
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
        alert("Congratulation, " + json.member.name + ". You are successfully added in members.");        
      });
  }
  
  window.addEventListener("load", function(){
      document.getElementById("register").addEventListener("click", function(){
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