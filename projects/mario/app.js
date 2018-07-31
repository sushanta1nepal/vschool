// when i click the following needs to happen:

// first we need data from the curent input multiplied by its price
// then we need to get the same from the other inputs / prices
// simply sum them together
// display the value

var inputGoomba = document.getElementById("numb1");
var inputBob = document.getElementById("numb2");
var inputCheep = document.getElementById("numb3");
//do this for the rest


// define the price values for each
var priceGoomba = 5;
var priceBob = 7;
var priceCheep = 11;
//continnue with prices


// attach an event listener to the button
var button = document.getElementById("subs");

button.addEventListener("click", function(e){
    e.preventDefault();
    var a = (inputGoomba.value) * (priceGoomba)
    console.dir(a);
    var b = (inputBob.value) * (priceBob)
    console.dir(b)
    var c = (inputCheep.value) * (priceCheep)
    console.dir(c)

    var total = (a + b + c)
    console.dir(total);
    document.getElementById("total").innerHTML = total;


    //extract values using input.value and save them each in variables
    //take each number and multiply by correesponding price, saving that in a variables    // 
})