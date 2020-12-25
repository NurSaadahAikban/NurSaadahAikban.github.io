function Booknow(gname, gemail){
  let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/nsa/bookings';
  //let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/bookingApp/bookings';

  let body = {
    booking: {
      name:gname,
      email:gemail,
      
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
     

      Booknow(name,email);

    });
});