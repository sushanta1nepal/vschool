const express = require('express');
// const playerRouter = exress.Router();
// const uuid = require('uuid/v4');

const Seniors = [
    {
        Name: 'David De Gea',
        Number: 1,
        Position:'Goal Keeper',
        age: 27,
        height: '192 cm',
        weight: '76 kg',
        nationality: 'Spanish',
        totalGamesPlayed: 242,
        redCard: 0,
        yellowCard: 3,
        cleanSheet: 94,
        goal: 0,
        assist: 0,
        passes: 5374,
        passesPerMatch: 22.20,
        ownGoals: 1
    },{
        Name: 'Lee Grant',
        Number: 13,
        Position: 'Goal Keeper',
        age: 35,
        height: '193 cm',
        weight: ,
        nationality: 'English',
        totalGamesPlayed: 0,
        seasonGamesPlayed: 0,
        minutes: 0,
        redCard: 0,
        yellowCard: 0,
        cleanSheet: 0,
        goal: 0,
        assist: 0,
        passes: 0,
        passesPerMatch: 0,
        ownGoals: 0,
    },{
        Name: 'Sergio Romero',
        Number: 22,
        Position: 'Goal Keeper',
        age: 31,
        height:
        weight:
        nationality: 'Argentenian',
        totalGamesPlayed: 39,
        redCard:
        yellowCard:
        cleanSheet: 25,
        goal:
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Jorl Pereira',
        Number: 40,
        Position: 'Goal Keeper',
        age: 22,
        height:
        weight:
        nationality: 'Portugese',
        totalGamesPlayed: 3,
        redCard:
        yellowCard:
        cleanSheet: 3,
        goal:
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Victor Lindelof',
        Number: 2,
        Position: 'Defender',
        age: 24,
        height:
        weight:
        nationality: 'Swedish',
        totalGamesPlayed: 34,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 0,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Eric Bailey',
        Number: 3,
        Position: 'Defender',
        age: 24, 
        height:
        weight:
        nationality: 'Ivorian',
        totalGamesPlayed: 60,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 1,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Phil Jones',
        Number: 4,
        Position: 'Defender',
        age: 26,
        height:
        weight:
        nationality: 'English',
        totalGamesPlayed: 193,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 5,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Chris Smalling',
        Number: 12,
        Position: 'Defender',
        age: 28,
        height: 
        weight:
        nationality: 'English'
        totalGamesPlayed: 292,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 18,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Marcos Rojo',
        Number: 16,
        Position: 'Defender',
        age: 28,
        height:
        weight:
        nationality: 'Argentinean',
        totalGamesPlayed: 107,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 2, 
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Ashley Young',
        Number: 18,
        Position: 'Defender',
        age: 33,
        height:
        weight:
        nationality: 'English'
        totalGamesPlayed: 205,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 16,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Diogo Dalot',
        Number: 20,
        Position: 'Defender',
        age: 19,
        height:
        weight:
        nationality: 'Portugese',
        totalGamesPlayed: 0,
        seasonGamesPlayed: 0,
        minutes: 0, 
        redCard:
        yellowCard:
        cleanSheet: 0,
        goal: 0,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Luke Shaw',
        Number: 23,
        Position: 'Defender',
        age: 23,
        height:
        weight:
        nationality: 'English',
        totalGamesPlayed: 70,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 1,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Timothy Fosu-Mensah',
        Number: 24,
        Position: 'Defender',
        age: 20, 
        height:
        weight:
        nationality: 'Dutch',
        totalGamesPlayed: 21,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 0,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Antonio Valencia',
        Number: 25,
        Position: 'Defender',
        age: 33,
        height:
        weight:
        nationality: 'Columbian',
        totalGamesPlayed: 333,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 25,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Matteo Darmian',
        Number: 36,
        Position: 'Defender',
        age: 28,
        height: 
        weight:
        nationality: 'Italian',
        totalGamesPlayed: 86,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 1,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name:'Axel Tuanzebe',
        Number: 38,
        Position: 'Defender',
        age: 20,
        height:
        weight:
        nationality: 'English',
        totalGamesPlayed: 8,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 0,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Paul Pogba',
        Number: 6,
        Position: 'Mid-Fielder',
        age: 25,
        height:
        weight:
        nationality: 'French',
        totalGamesPlayed: 100,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 17,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Juan Mata',
        Number: 8,
        Position: 'Mid-Fielder',
        age: 30,
        height:
        weight:
        nationality: 'Spanish',
        totalGamesPlayed: 188,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 39, 
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Jesse Lingard',
        Number: 14,
        Position: 'Mid-Fielder',
        age: 25,
        height:
        weight:
        nationality: 'English',
        totalGamesPlayed: 135,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 24,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Andreas Pereira',
        Number: 15,
        Position: 'Mid-Fielder',
        age: 22,
        height:
        weight:
        nationality: 'Brazilian',
        totalGamesPlayed: 15,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 1,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Fred',
        Number: 17,
        Position: 'Mid-Fielder',
        age: 25,
        height:
        weight:
        nationality: 'Brazilian',
        totalGamesPlayed: 4,
        seasonGamesPlayed: 4,
        minutes:
        redCard:
        yellowCard:
        cleanSheet:
        goal: 0,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Ander Herrera',
        Number: 21,
        Position: 'Mid-Fielder',
        age: 29,
        height:
        weight:
        nationality: 'Spanish',
        totalGamesPlayed: 163,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 17,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Marouane Fellaini',
        Number: 27,
        Position: 'Mid-Fielder',
        age: 30,
        height:
        weight:
        nationality: 'Belgian',
        totalGamesPlayed: 161,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 20,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Nemanja Matic',
        Number: 31,
        Position: 'Mid-Fielder',
        age: 30,
        height:
        weight:
        nationality: 'Serbian',
        totalGamesPlayed: 52,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 2,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Scott McTominay',
        Number: 39,
        Position: 'Mid-Fielder',
        age: 21,
        height:
        weight:
        nationality: 'English',
        totalGamesPlayed: 28,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 0,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Alexis Sanchez',
        Number: 7,
        Position: 'Forward',
        age: 29,
        height:
        weight:
        nationality: 'Chilean',
        totalGamesPlayed: 22,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 3,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Romelu Lukaku',
        Number: 9,
        Position: 'Forward',
        age: 25,
        height:
        weight:
        nationality: 'Belgian',
        totalGamesPlayed: 55,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 30,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Marcus Rashford',
        Number: 10,
        Position: 'Forward',
        age: 20,
        height:
        weight:
        nationality: 'English',
        totalGamesPlayed: 126,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 32,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    },{
        Name: 'Anthony Martial',
        Number: 11,
        Position: 'Forward',
        age: 22,
        height:
        weight:
        nationality: 'French',
        totalGamesPlayed: 139,
        redCard:
        yellowCard:
        cleanSheet:
        goal: 36,
        assist:
        passes:
        passesPerMatch:
        ownGoals:
    }
]