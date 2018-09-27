const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')

const bountyHunt = [
    {
        firtName: 'Luke',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 100,
        Type: 'Jedi',
        id: uuid(),
    },
    {
        firtName: 'Annaken',
        lastName: 'Skywalker',
        living: false,
        bountyAmount: 100,
        Type: 'Jedi',
        id: uuid(),
    },
    {
        firtName: 'Hans',
        lastName: 'Solo',
        living: false,
        bountyAmount: 100,
        Type: 'Jedi',
        id: uuid(),
    },
    {
        firtName: 'Kylo',
        lastName: 'Ren',
        living: true,
        bountyAmount: 100,
        Type: 'Sith',
        id: uuid(),
    },
    {
        firtName: 'General',
        lastName: 'Hux',
        living: true,
        bountyAmount: 100,
        Type: 'Sith',
        id: uuid(),
    },
    {
        firtName: 'Darth',
        lastName: 'Dane',
        living: true,
        bountyAmount: 100,
        Type: 'Sith',
        id: uuid(),
    },
    {
        firtName: 'Sheev',
        lastName: 'Palpatine',
        living: false,
        bountyAmount: 100,
        Type: 'Sith',
        id: uuid(),
    },
]

app.use(bodyParser.json())

app.get('/',(req, res)=>{
    res.send(bountyHunt)
})

app.post('/',(req, res)=>{
    console.dir(req.body)
    bountyHunt.push(req.body)
    res.send(bountyHunt)
})


app.listen(7000, ()=>{
    console.log('list of Bounties')
})