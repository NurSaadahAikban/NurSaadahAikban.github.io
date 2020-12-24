function GetBookings(){
    let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/bookingApp/bookings';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.bookings);
      let bookingList = document.getElementById("booking-list");
      let bookingIds =[];

      for(let x=0; x<json.bookings.length;x++){
          let gName = json.bookings[x].name;
          let gEmail = json.bookings[x].email;
          let gPax = json.bookings[x].pax;
          let gId = json.bookings[x].id;
          let gRemarks = json.bookings[x].remarks;
          let buttonId = "delete" + gId;//activate delete button

          let row = bookingList.insertRow(bookingList.rows.length);

          //specify what to put in cell
          row.insertCell(0).innerHTML = gId;
          row.insertCell(1).innerHTML = gName;
          row.insertCell(2).innerHTML = gEmail;
          row.insertCell(3).innerHTML = gPax;
          row.insertCell(4).innerHTML = gRemarks;
          row.insertCell(5).innerHTML = "<button id='" + buttonId + "' class 'btn btn-danger'>Delete</button>";
        
          //push all buttonid in 1 array
          bookingIds.push(buttonId);
      }

      //and later attach click event to all button
      for(let j=0; j< bookingIds.length;j++){
          let el = document.getElementById(bookingIds[j]);
          le.addEventListener("click", function(){
                let theId = bookingIds[j].replace("delete","");
                //to check
                alert(theId);
          });
      }
    }); 
}

window.addEventListener("load", function(){
    document.getElementById("refreshList").addEventListener("click", function(){
        GetBookings();
    });    
})