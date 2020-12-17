function GetBookings(){
    let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/bookingApp/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.bookings);
      let bookingList = document.getElementById("bookingList");
      bookingList.innerHTML =" ";

      let jsonDiv = document.getElementById("json");
      jsonDiv.innerHTML ="";
      jsonDiv.innerHTML = json.bookings;


      for(let x=0; x<json.bookings.length;x++){
          let gName = json.bookings[x].name;
          let gEmail = json.bookings[x].email;
          let gPax = json.bookings[x].pax;
          let gId = json.bookings[x].id;

          bookingList.innerHTML += gId + "-" + gName + ", "+
          gEmail + ", pax:" + gPax + "<br>"; 
      }
    
    }); 
}

//listener
let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function(){
    GetBookings();
});

function Booknow(guestname, guestemail,guestpax){
  let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/bookingApp/bookings';
  let body = {
    booking: {
      name:guestname,
      email:guestemail,
      pax:guestpax
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
    // Do something with object
    //console.log(json.booking);
    let bookmsg = document.getElementById("bookmsg");
    bookmsg.innerHTML = json.booking.name +" added!"
    GetBookings();
    });
}

let booknow = document.getElementById("booknow");
booknow.addEventListener("click", function(){
    let gName = document.getElementById("guestname").value;
    let gEmail = document.getElementById("guestemail").value;
    let gPax = document.getElementById("guestpax").value;

    Booknow(gName,gEmail,gPax);

});
