var price;
var quantity=10;
var caketype == Red Velvet
if(caketype == "Red Velvet Cupcake"){
	if(topping == "Buttercream"){       
        if(filling == "Strawberry"){
            price = 4.00 * quantity;
        }
        else {
            price = 2.50 * quantity;
        }
    }

    else if(topping=="Cream Cheese"){
        if(filling == "Strawberry"){
            price=6.00* quantity;
        }
        else{
            price=3.50* quantity;
        }
    }    	
}

else if(caketype="Chocolate Muffin"){
    if(topping == "Chocolate Chip" && topping =="nuts"){
        price==3.50* quantity;
    }
    else if(topping == "Chocolate Chip"){
        price == 2.50* quantity;
    }
    else if(topping =="nuts"){
        price == 2.50* quantity;
    }
    else{
        price == 1.80* quantity;
    }
}

console.log(price);