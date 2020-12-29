function GetProducts(){
    let url = 'https://api.sheety.co/7b9172ba5421780439c0e82967bca59f/nsaProject/collections';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.collections);
      let colList = document.getElementById("collection-list")
      let name = document.getElementById("name");
      let image = document.getElementById("image");
      let price = document.getElementById("price");

      for(let x=0; x<json.collections.length; x++){      
        name.innerHTML = json.collections[x].pname;
        image.innerHTML = json.collections[x].pimage;
        price.innerHTML = json.collections[x].pprice;

        colList.innerHTML += image + " " +name + " "+ price;
    }
    
    }); 
}

GetProducts();