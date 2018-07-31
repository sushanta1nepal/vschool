var readline = require('readline-sync');
var name = readline.question("welcome to the escape room, what is your name?");

console.log(`hello${name},you have entered a room. yourt goal is to excape, good luck ${name}!\n`)

var isAlive = true;
var hasKey = false;
while(isAlive){
    var choices = ['put hand in hole','find the key','open the door'];
    var index = readline.keyInSelect(choices, "what would you like to do?")

    if(choices[index]==="find the key"){
        if(hasKey){
            console.log('the door was opened')
            isAlive = false;
        }else{
            console.log('go find the key')
            isAlive=true;
        }
    }
    console.log(choices);
    console.log(index)
    isAlive = false;


}