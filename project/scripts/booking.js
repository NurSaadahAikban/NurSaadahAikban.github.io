function transformUpperCase(){
  let name=document.getElementById("name");
  let address1=document.getElementById("address1");
  let address2=document.getElementById("address2");
  let city =document.getElementById("city");
  let state = document.getElementById("state");

  name.value = name.value.toUpperCase();
  address1.value = address1.value.toUpperCase();
  address2.value = address2.value.toUpperCase();
  city.value = city.value.toUpperCase();
  state.value = state.value.toUpperCase();
}

let elName = document.getElementById("name");
let elAddress1 = document.getElementById("address1");
let elAddress2 = document.getElementById("address2");
let elCity = document.getElementById("city");
let elState = document.getElementById("state");

elName.addEventListener("keyup",transformUpperCase);
elAddress1.addEventListener("keyup",transformUpperCase);
elAddress2.addEventListener("keyup",transformUpperCase);
elCity.addEventListener("keyup",transformUpperCase);
elState.addEventListener("keyup",transformUpperCase);

//check length of mobile number
function checkMobileLength(){
  let mobile = document.getElementById("mobile").value;
  if(mobile.length <10){
    alert("Your mobile number is less than 10 digit.");
  }
  else if(mobile.length > 11){
    alert("Your mobile number is more than 11 digits");
  }  
}
let elMobile = document.getElementById("mobile");
elMobile.onblur = checkMobileLength;

//check length of poscode number
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

function Booknow(gname, gemail,ghome, gmobile,gaddress1,gaddress2,gcity,gstate,gposcode,
  pname,pprice,gquantity,gdatetosend,gnotes){
  let url = 'https://api.sheety.co/7b9172ba5421780439c0e82967bca59f/nsaProject/bookings';

  let body = {
    booking: {
      name:gname,
      email:gemail,
      home:ghome,
      mobile:gmobile,
      address1 :gaddress1,
      address2 : gaddress2,
      city : gcity,
      state : gstate,
      poscode : gposcode,
      pname : pname,
      pprice : pprice,     
      quantity : gquantity,
      datetosend : gdatetosend,
      notes : gnotes
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
          
      alert(json.booking.name + " added");        
    });
}


window.addEventListener("load", function(){
    document.getElementById("bookNow").addEventListener("click", function(){
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let home = document.getElementById("home").value;
      let mobile = document.getElementById("mobile").value;
      let address1 = document.getElementById("address1").value;
      let address2 = document.getElementById("address2").value;
      let state = document.getElementById("state").value;
      let city = document.getElementById("city").value;
      let poscode = document.getElementById("poscode").value;
      let pname =document.getElementById("pname").value;
      let pprice =document.getElementById("pprice").value;
      let quantity = document.getElementById("quantity").value;      
      let datetosend = document.getElementById("datetosend").value;
      let notes = document.getElementById("notes").value;

      Booknow(name,email,home,mobile,address1, address2,state,city,poscode, 
        pname,pprice,quantity,datetosend,notes);

    });
});