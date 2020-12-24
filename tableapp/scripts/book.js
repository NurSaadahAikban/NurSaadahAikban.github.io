function Booknow(guestname, guestemail,guestpax,guestremarks){
    let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/bookingApp/bookings';
    let body = {
      booking: {
        name:guestname,
        email:guestemail,
        pax:guestpax,
        remark:guestremarks
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
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPax = document.getElementById("userPax").value;
        let userRemarks =document.getElementById("userRemarks").value;

        Booknow(userName,userEmail,userPax,userRemarks);

      });
  });