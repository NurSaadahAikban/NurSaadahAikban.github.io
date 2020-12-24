function Booknow(gname, gemail, ghome, gmobile,gaddress1,gaddress2,gcity,gstate,gposcode,
    gcaketype,gflavour,gfilling,gtopping,gnumberoforder,gdatetosend,gnotes){
    let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/nsa/bookings';
    let body = {
    booking: {
      name = gname,
      email= gemail,
      home=ghome,
      mobile=gmobile,
      address1 =gaddress1,
      address2 = gaddress2,
      city = gcity,
      state = gstate,
      poscode = gposcode,
      caketype = gcaketype,
      flavour = gflavour,
      filling= gfilling,
      topping =gtopping,
      numberoforder = gnumberoforder,
      datetosend = gdatetosend,
      notes = gnotes
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers:{
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
        let caketype = document.getElementById("caketype").value;
        let flavour = document.getElementById("flavour").value;
        let filling = document.getElementById("filling").value;
        let topping = document.getElementById("topping").value;
        let numberoforder = document.getElementById("numberoforder").value;
        let datetosend = document.getElementById("datetosend").value;
        let notes = document.getElementById("notes").value;

        Booknow(name,email,home,mobile,address1, address2,state,city,poscode,
            caketype,flavour,filling,topping,numberoforder,datetosend,notes);
    });
});