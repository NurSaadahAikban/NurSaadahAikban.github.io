function GetMember(){
    
    let url = 'https://api.sheety.co/e074bea20583dc3b71f7c5f6b29b9973/memberNsa/members';
    
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.bookings);
      let memberList = document.getElementById("memberList");
      let bookingIds =[];

      for(let x=0; x<json.members.length;x++){          
          let userinfo = "Membership Id: "+json.members[x].id + "<br>Name: " + json.members[x].name + 
          "<br>Email: "+ json.members[x].email+"<br>Mobile: "+json.members[x].phone +"<br>Address: "+ 
          json.members[x].address +" " + json.members[x].poscode + " "+ json.members[x].state +" " + json.members[x].city;
          
          let row = memberList.insertRow(memberList.rows.length);

          //specify what to put in cell
          row.insertCell(0).innerHTML = userinfo;
          
          //push all buttonid in 1 array
          bookingIds.push(buttonId);
      }      
    }); 
}

window.addEventListener("load", function(){
    document.getElementById("membership").addEventListener("click", function(){
        GetMember();
    });    
})