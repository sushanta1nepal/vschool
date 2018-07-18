var shopper = {  
    shopperName: "Sushant Nepal",
    groceryItems: ["whisky", "chips", "coke", "veggies", "salad"],
    quantity: (44),
    payment: true,
    sentence: function() {
      return this.shopperName + " " + "purchased " + this.groceryItems[0];
    }
  };
    
  console.log(shopper)
  console.log(shopper.sentence())
  
//   document.getElementById("").innerHTML = shopper.sentence();