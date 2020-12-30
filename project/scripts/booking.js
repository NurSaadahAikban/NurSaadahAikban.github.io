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
    for(let x=0; x<json.bookings.length;x++){  
      if(json.bookings[x].pname=="Chocolate Chip Muffin" || json.bookings[x].pname=="Vanilla Fun Fetti Muffin" ||
      json.bookings[x].pname=="Red Velvet Cupcake" || json.bookings[x].pname=="Oreo Cupcake" ||
      json.bookings[x].pname=="Eggs Tart" || json.bookings[x].pname=="Lemon Tart" ){
        json.bookings[x].pprice = 2.00  * json.bookings[x].quantity;
      }
      else if(json.bookings[x].pname=="Red Velvet Cake" || json.bookings[x].pname=="Classic Chocolate Cake"){
        json.bookings[x].pprice = 90.00  * json.bookings[x].quantity;
      }
      else if(json.bookings[x].pname=="Chocolate Balls Cookies" || json.bookings[x].pname=="Crinkle Red Velvet Cookies"){
        json.bookings[x].pprice = 25.00  * json.bookings[x].quantity;
      }
      else if(json.bookings[x].pname=="Seri Muka Sticky Rice Cake" || json.bookings[x].pname=="Kuih Lapis Cake"){
        json.bookings[x].pprice = 18.00  * json.bookings[x].quantity;
      }
      else if(json.bookings[x].pname=="Boba Milk Tea"){
        json.bookings[x].pprice = 5.00 * json.bookings[x].quantity;
      }
      else if(json.bookings[x].pname=="Coconut Milk Shake"){
        json.bookings[x].pprice = 4.00* json.bookings[x].quantity;
      }
      else if(json.bookings[x].pname=="Coke Float"){
        json.bookings[x].pprice = 3.00* json.bookings[x].quantity;
      }      
  }   
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
      let pprice = document.getElementById("pprice").value;
      let quantity = document.getElementById("quantity").value;      
      let datetosend = document.getElementById("datetosend").value;
      let notes = document.getElementById("notes").value;

      Booknow(name,email,home,mobile,address1, address2,state,city,poscode, 
        pname,pprice,quantity,datetosend,notes);

    });
});