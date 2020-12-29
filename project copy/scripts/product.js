function GetProduct(){
    
    let url = 'https://api.sheety.co/7b9172ba5421780439c0e82967bca59f/nsaProject/collections';
     
      fetch(url)
      .then((response) => response.json())
      .then(json => {
        // Do something with the data
        //console.log(json.bookings);
        let colList = document.getElementById("collection-list");
       
        let pname = document.getElementById("name");
        let pprice = document.getElementById("price");
        let pimg = document.getElementById("img");

        for(let x=0; x<json.colList.length;x++){          
            let name = json.colList[x].pname;
            let price = json.colList[x].pprice;
            let image = json.colList[x].pimage;
            
            pname.innerHTML = name;
            pprice.innerHTML = price;
            pimg.innerHTML = image;
            
        }
      }); 
  }

  window.addEventListener("load", function(){
    GetProduct();
  })