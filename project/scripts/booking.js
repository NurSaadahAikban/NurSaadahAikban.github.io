function Booknow(gname, gemail, ghome, gmobile,gaddress1,gaddress2,gcity,gstate,gposcode,
    gcaketype,gflavour,gfilling,gtopping,gnumberoforder,gdatetosend,gnotes){
    let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/nsa/bookings';
    let body = {
    booking: {
      name : gname,
      email: gemail,
      home:ghome,
      mobile:gmobile,
      address1 :gaddress1,
      address2 : gaddress2,
      city : gcity,
      state : gstate,
      poscode : gposcode,
      caketype : gcaketype,
      flavour : gflavour,
      filling : gfilling,
      topping : gtopping,
      numberoforder : gnumberoforder,
      datetosend : gdatetosend,
      notes : gnotes
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
        let username = document.getElementById("username").value;
        let useremail = document.getElementById("useremail").value;
        let userhome = document.getElementById("userhome").value;
        let usermobile = document.getElementById("usermobile").value;
        let useraddress1 = document.getElementById("useraddress1").value;
        let useraddress2 = document.getElementById("useraddress2").value;
        let userstate = document.getElementById("userstate").value;
        let usercity = document.getElementById("usercity").value;
        let userposcode = document.getElementById("userposcode").value;
        let usercaketype = document.getElementById("usercaketype").value;
        let userflavour = document.getElementById("userflavour").value;
        let userfilling = document.getElementById("userfilling").value;
        let usertopping = document.getElementById("usertopping").value;
        let usernumberoforder = document.getElementById("usernumberoforder").value;
        let userdatetosend = document.getElementById("userdatetosend").value;
        let usernotes = document.getElementById("usernotes").value;

        Booknow(username,useremail,userhome,usermobile,useraddress1, useraddress2,userstate,usercity,userposcode,
            usercaketype,userflavour,userfilling,usertopping,usernumberoforder,userdatetosend,usernotes);
    });
});