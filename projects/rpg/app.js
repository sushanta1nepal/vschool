var ask = require("readline-sync");
var Attack = require("./attack.js");
var Opponent = require("./oppo.js")
// var {walk, attack} = require("./gameFunctions")
// console.log(gameFunctions)

var oppoList =["shaoKhan", "scorpion", "goro", "raiden", "liuKang"]

var dice = num => Math.floor(Math.random() * num);

var cap = 100;
var player = {
    name: '',
    health: 100,
    isAlive: true,
    cash: '',
    fatality: {},
    attacks: [
        new Attack("Get Over Here", 10),
        new Attack("Freeze", 12),
        new Attack("Cartwheel Kick", 15),
        new Attack("Bicycle Kick", 20),
    ],
    inventory: ["training", 'attacks', 'health'],
    printInventory: function (inventory) {
        console.log();
    }
}
let currEnemy = oppoList[dice(oppoList.length)];

let enemyStats = {
     name: Opponent[currEnemy].name,
     health: Opponent[currEnemy].health,
     attack: Opponent[currEnemy].attacks[dice(4)].damage,
     attackName: Opponent[currEnemy].attacks.name
}



let fight = function(enemy) {

    let thisAttack = ask.keyIn(`[1] ${player.attacks[0].name}\n[2] ${player.attacks[1].name}\n[3] ${player.attacks[2].name}\n[4] ${player.attacks[3].name}\n`, {limit: '$<1-4>'})
    console.log(player.health )
    console.log(player.name)
    console.log(enemy.health) 
    console.log(enemy.name)  
    console.log()

    switch(thisAttack) {
        case '1':
            enemy.health -= (player.attacks[0].damage + dice(10));
            player.health -= (enemy.attacks[dice(4)].damage + dice(10));
            console.log(`${enemy.name} attacked you with ${enemy.attacks[dice(4)].name} delivering ${enemy.attacks[dice(4)].damage + dice(10)} in damage`)
            break;
        case '2':
            enemy.health -= (player.attacks[1].damage + dice(10));
            enemy.health -= (enemy.attacks[dice(4)].damage + dice(10));
            break;
        case '3':
            enemy.health -= (player.attacks[2].damage + dice(10));
            enemy.health -= (enemy.attacks[dice(4)].damage + dice(10));
            break;
        case '4':
            enemy.health -= (player.attacks[3].damage + dice(10));
            enemy.health -= (enemy.attacks[dice(4)].damage + dice(10));
            break;
        default: 
            console.log('wuuuuut')
    }
    
}


var homeScreen = ["Sparring With Trainer", "Spa and Massage", "Go Home To Sleep", "Proceed to the next Round"," Go Back"]

player.name = ask.question("Hello Earthling, you are invited to the biggest and the best tournament in the whole world, You will be representing the Common Human in this Five Round tournament. The rules are simple kill or be killed!!! and yes make sure you train and rest enough before movi what is your name?\n\n");
console.log("hi " + player.name + ", Nice to meet you. Please pick a Fatality! \n\n")

player.name = player.name.charAt(0).toUpperCase()+player.name.slice(1).toLowerCase();

var fatalityData = [{
    name: "Chest Kold\n",
    desc: "Fatility in which you freeze your opponents torso then shatter it like a glass, then you split the body into two halves and toss them in opposite direction\n"
}, {
    name: "The Grinder\n",
    desc: "summons two skeletal hands around your opponent, and grabs the opponent with them. then the hands twist the opponent torso, before ripping it off. Finally, smashe both the torso and the lower body by clapping both hands. The head can be seen rolling towards you afterward.\n"
}, {
    name: "Both Ends\n",
    desc: " open two portals, one to the left and one to the right, before pushing the opponent into a portal and grabbing the leg. Quickly catch the arm through the other portal. Finally close both portals, snapping the opponent in half. then throw the body to the ground.\n"
}, {
    name: "Here's " + player.name,
    desc:  player.name + " turns his opponent around with a punch, then jabs his hands into their back and tears a hole through their torso. then peek your head through the opening and says, 'Heeeer's " + player.name + "!!!!' you then stand back, allowing the victim to fall to the floor.\n "
}

];

var displayFatalities = fatalityData.map(function (fatality) {
    return fatality.name + " - " + fatality.desc;
})


var fatalities = ['Chest Kold', 'The Grinder - ', 'Both Ends', "here's" + player.name];

var index = ask.keyInSelect(displayFatalities, "Select your fatality");

player.fatality = fatalityData[index];
console.log("perfect you fatality is " + player.fatality.name + " !!!")

while (player.health > 0) {
    //choose a route
    var choice = ask.keyInSelect(["Sparring With Trainer", "Menu and Stats", "Go Home To Sleep", "Proceed to the next Round"], "Choose an option");
    switch (choice) {
        case 0:
            if (player.gold < 100) {
                console.log("Sorry not enough gold!");
                continue;
            }
            if(player.health <10 ) {
                console.log("You are too weak!");
                continue;
            }
            player.gold -= 100;
            console.log("Training...");
            player.attack*1.25;
            player.health-=10;
            cap *1.25;
            break;
        case 1:
            console.log(player.name + '\nHealth - ' + player.health + ' Cash - ' + player.cash);
            continue;
        case 2:
            player.health === cap ? null : player.health++;
            break;
        case 3:
            //fight scenario
            // there needs to be a enemy
            // engage the fight loop
            currEnemy = oppoList[dice(oppoList.length)]
            var newEnemy = Opponent[currEnemy]
            while(newEnemy.health > 0 && player.health > 0){
               fight(newEnemy)
            }
            if(newEnemy.health < 1) {
                player.gold += 1500;
                console.log('Great Job, the enemy is dead')
                // multiplier *= 1.25;
                // multiple = Math.floor(multiplier);
            }
    }
}






