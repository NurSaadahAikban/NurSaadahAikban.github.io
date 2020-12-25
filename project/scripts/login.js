function GetNamePassword(){
    //let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/bookingApp/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.bookings);
      let member = document.getElementById("login");
      member.innerHTML =" ";

      let jsonDiv = document.getElementById("json");
      jsonDiv.innerHTML ="";
      jsonDiv.innerHTML = json.bookings;


      for(let x=0; x<json.bookings.length;x++){
          let gName = json.bookings[x].name;
          let gpassword = json.bookings[x].password;
      }
    
    }); 
}

let getNamePassword = document.getElementById("login");
getBookingBtn.addEventListener("click", function(){
    GetNamePassword() == 
});