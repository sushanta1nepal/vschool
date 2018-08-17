var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = '';


while(options[option] != 'fight bears'){
  option = ask.keyInSelect(options, "What would you like to do today?:");
  if(options[option] === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  } else {
    if (options[option] === "shoot guns"){
       console.log("You shoot guns.");
    }
  }
}
console.log("You fought a bear and got beat up!");

var ask = require("readline-sync");

var options = ["pick flowers","shoot guns","fight bears"];
var option = "undecided";
while(option !="fight bears"){
  ask.keyInSelect(options, "what would you like to do today?:");
  if (iotion = "pick flowers"){
    console.log("you pick some flowes. you make a bouquet.");
  } 
}
