var pen = {  
    color: "Black",
    price: 2,
    isGelPen: false,
    write: function() {
        console.log("I'm a " + this.color + " pen that costs $" + this.price);
    }
}

var pencil = {  
    color: "grey",
    price: .50,
    isColorPencil: false,
    write: function() {
        console.log("I'm a " + this.color + " pencil that costs $" + this.price);
    }
}

var marker = {  
    color: "pink",
    price: 1,
    isPermanentMarker: true,
    write: function() {
        console.log("I'm a " + this.color + " marker that costs $" + this.price);
    }
}

var bike = {  
    color: "silver",
    price: 500,
    isBicycle: true,
    write: function() {
        console.log("I'm a " + this.color + " Bike that costs $" + this.price);
    }
}

var hat = {  
    color: "Black",
    price: 10,
    isHat: true,
    write: function() {
        console.log("I'm a " + this.color + " hat that costs $" + this.price);
    }
}

var mouse = {  
    color: "white",
    price: 50,
    isMagicMouse: false,
    write: function() {
        console.log("I'm a " + this.color + " mouse that costs $" + this.price);
    }
}

var sushant = {
    color: "brown",
    age: 30,
    isAlive: true,
    write: function() {
        console.log("I'm Sushant" +this.color + "and i am " + this.age);
    }
}

console.log(mouse.write(), hat.write(), bike.write(), marker.write(), pencil.write(), pen. write(), sushant.write())