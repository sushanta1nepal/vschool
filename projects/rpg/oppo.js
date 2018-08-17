var Attack = require("./attack");

function Opponent(name, health, isAlive, fatal, attacks) {
    this.name = name;
    this.health = health;
    this.isAlive = isAlive;
    this.fatal = fatal;
    this.attacks = attacks
}
var shaoKhan  = new Opponent("Shao Khan", 100, true, "Home Run", [
    new Attack("Shadow Charge", 10), 
    new Attack("Fire Ball", 12), 
    new Attack("Powerful Slam", 15), 
    new Attack("Sledge Hammer", 20), 
]);
var scorpion = new Opponent("Scorpion", 100, true, "Spine Rip",[
    new Attack("Twisting Strike", 10), 
    new Attack("Spectre Blast", 12), 
    new Attack("Neck Chop", 15), 
    new Attack("Get Over Here", 20), 
]);
var goro = new Opponent("Goro", 100, true, "Limp Rip",[
    new Attack("Teleport Stomp", 10), 
    new Attack("Two Hand Swipe", 12), 
    new Attack("Super Uppercut", 15), 
    new Attack("Dragon Breath", 20), 
]);
var raiden = new Opponent("Raiden", 100, true, "Eletric Decapitation",[
    new Attack("Lightening Bolt", 10), 
    new Attack("Torpedo", 12), 
    new Attack("Electric Grab", 15), 
    new Attack("Staff Shock", 20), 
]);
var liuKang = new Opponent("Liu Kang", 100, true, "Bone Break",[
    new Attack("High Dragon Fire", 10), 
    new Attack("Air Fireball", 12), 
    new Attack("Flying Dragon Kick", 15), 
    new Attack("Bicycle Kick", 20), 
]);

let enemies = [
    {
        name: 'Goro',
        health: 100,
        fatality: 'Limb Rip',
        attacks: [
            {
                name: 'Teleport Stomp',
                damage: 10,
            },
            {
                name: 'Two Hand Swipe',
                damage: 12,
            },
            {
                name: 'Super Uppercut',
                damage: 15,
            },
            {
                name: 'Dragon Breath',
                damage: 20,
            },
        ]
    },
    {
        name: 'Liu Kang',
        health: 100,
        fatality: 'Bone Break',
        attacks: [
            {
                name: 'High Dragon Fire',
                damage: 10,
            },
            {
                name: 'Air Fireball',
                damage: 12,
            },
            {
                name: 'Flying Dragon Kick',
                damage: 15,
            },
            {
                name: 'Bicycle Kick',
                damage: 20,
            },
        ]
    },
    {
        name: 'Raiden',
        health: 100,
        fatality: 'Eletric Decapitation',
        attacks: [
            {
                name: 'Lightening Bolt',
                damage: 10,
            },
            {
                name: 'Torpedo',
                damage: 12,
            },
            {
                name: 'Electric Grab',
                damage: 15,
            },
            {
                name: 'Staff Shock',
                damage: 20,
            },
            
        ]
    },
    {
        name: 'Shao Khan',
        health: 100,
        fatality: 'Home Run',
        attacks: [
            {
                name: 'Shadow Charge',
                damage: 10,
            },
            {
                name: 'TFire Ball',
                damage: 12,
            },
            {
                name: 'Powerful Slam',
                damage: 15,
            },
            {
                name: 'Sledge Hammer',
                damage: 20,
            },
        ]
    },
    {
        name: 'Scorpion',
        health: 100,
        fatality: 'Spine Rip',
        attacks: [
            {
                name: 'Twisting Strike',
                damage: 10,
            },
            {
                name: 'Spectre Blast',
                damage: 12,
            },
            {
                name: 'Neck Chop',
                damage: 15,
            },
            {
                name: 'Get Over Here',
                damage: 20,
            },
        ]        
    },
]    
module.exports = {
    shaoKhan,
    goro,
    scorpion,
    raiden,
    liuKang
}

// console.log(shaoKhan.attacks[1].name)