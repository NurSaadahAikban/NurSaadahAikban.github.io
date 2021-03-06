function GetBookings(){
    
  let url = 'https://api.sheety.co/7b9172ba5421780439c0e82967bca59f/nsaProject/bookings';
   
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.bookings);
      let bookingList = document.getElementById("booking-list");
      let bookingIds =[];

      //clear the table rows
      for(let k=bookingList.rows.length -1; k>0;k--){
          bookingList.deleteRow(k);
      }

      for(let x=0; x<json.bookings.length;x++){          
          let ginfo = "Type of Cake: "+json.bookings[x].caketype + "<br>Flavour: " + json.bookings[x].flavour + 
          "<br>Filling: "+ json.bookings[x].filling+"<br>Topping: "+json.bookings[x].topping +"<br>Notes: "+ 
          json.bookings[x].notes +"<br>Requested Date To Send: " + json.bookings[x].datetosend ;
          let gquantity = json.bookings[x].quantity;
          let gId = json.bookings[x].id;
          let buttonId = "delete" + gId;//activate delete button
          let row = bookingList.insertRow(bookingList.rows.length);

          //specify what to put in cell
          row.insertCell(0).innerHTML = ginfo;
          row.insertCell(1).innerHTML = gquantity;
          row.insertCell(2).innerHTML = gquantity;
          row.insertCell(3).innerHTML = "<button id='" + buttonId + "' class='btn btn-secondary'>Delete</button>";
        
          //push all buttonid in 1 array
          bookingIds.push(buttonId);
      }

      //and later attach click event to all button
      for(let j=0; j< bookingIds.length;j++){
          let el = document.getElementById(bookingIds[j]);
          el.addEventListener("click", function(){
                let theId = bookingIds[j].replace("delete","");
                //to check
                //alert(theId);
                DeleteBooking(theId);
          });
      }
    }); 
}

/*for(let y=0;y< json.collections.length; y++){  
  if(json.bookings[x].flavour == json.collections[y].pname){
    price = json.collections[y].pprice;
  } 
  else{
    alert(json.booking[x].flavour + " is not in our list product.");
  }
}
*/
window.addEventListener("load", function(){
    document.getElementById("refreshList").addEventListener("click", function(){
        GetBookings();
    });    
})

function DeleteBooking(id){
    let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/nsa/bookings/' + id;
    fetch(url, {
      method: 'DELETE',
    })
      .then((response) => {
        GetBookings();
      });  
  }