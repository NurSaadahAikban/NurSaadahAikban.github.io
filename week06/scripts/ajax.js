function getRandomUser(){
    let xhttp = new XMLHttpRequest(); //CREATE REQUEST OBject
    
    xhttp.onreadystatechange =function(){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.response);
            let elFname = document.getElementById("fname");
            let elLname = document.getElementById("lname");
            let elJsonResult = document.getElementById("jsonResult");
            let elUserimg = document.getElementById("userimg");
            let elPhone = document.getElementById("phone");
            let elAddr =document.getElementById("addr");
            let elEmail = document.getElementById("email");

            elJsonResult.innerHTML=this.response;
        }
    }

    xhttp.open("GET","https://randomuser.me/api", true);
    xhttp.send();

}

let elRandomuser =document.getElementById("getRandomUserBtn");
elRandomuser.addEventListener("click", function(){
    getRandomUser();
})