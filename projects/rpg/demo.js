var rs = require("readline-sync");

var cap = 100;
var player = {
    health: 100,
    attack: 3,
    gold: 5
}

var Enemy = function(health, attack, reward){
    this.health = health,
    this.attack = attack,
    this.reward = reward
}

var multiplier = 1;

enemyStats = {
    health: 10,
    attack: 3,
    reward: 5
}

while (player.health > 0) {
    //choose a route
    var choice = rs.keyInSelect(["train", "menu", "rest", "fight"], "Choose an option");
    switch (choice) {
        case 0:
            if (player.gold < 4) {
                console.log("Sorry not enough gold!");
                continue;
            }
            if(player.health < 3) {
                console.log("You are too weak!");
                continue;
            }
            player.gold -= 4;
            console.log("Training...");
            player.attack++;
            player.health--;
            cap += 1;
            break;
        case 1:
            console.log(player);
            continue;
        case 2:
            player.health === cap ? null : player.health++;
            break;
        case 3:
            //fight scenario
            // there needs to be a enemy
            var enemy = new opponent(enemyStats.health * multiplier, enemyStats.attack * multiplier, enemy.reward * multiplier)
            // engage the fight loop
            while(true){
                player.health -= enemy.attack;
                enemy.health -= player.attack;
                if(enemy.health < 1 || player.health < 1) break;
            }
            if(enemy.health < 0) {
                player.gold += enemy.reward;
                multiplier *= 1.25;
                multiple = Math.floor(multiplier);
            }
    }
}

