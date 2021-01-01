function GetMember(){
    
    let url = 'https://api.sheety.co/7b9172ba5421780439c0e82967bca59f/nsaProject/members';
    
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.bookings);
      let memberList = document.getElementById("memberList");
        
        for(let x=0; x<json.members.length;x++){          
            let userinfo = "Membership Id: "+json.members[x].id + "<br>Name: " + json.members[x].name + 
            "<br>Email: "+ json.members[x].email+"<br>Mobile: "+json.members[x].phone +"<br>Address: "+ 
            json.members[x].address +" " + json.members[x].poscode + " "+ json.members[x].state +" " + json.members[x].city;
            
            let row = memberList.insertRow(memberList.rows.length);

            //specify what to put in cell
              row.insertCell(0).innerHTML = userinfo;
            
        }      
    }); 
}

window.addEventListener("load", function(){
    document.getElementById("membership").addEventListener("click", function(){
      GetMember();       
    });    
})