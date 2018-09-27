const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')

const bountyHunt = [
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        isLiving: true,
        bountyAmount: 100,
        type: 'Jedi',
        id: uuid(),
    },
    {
        firstName: 'Annaken',
        lastName: 'Skywalker',
        isLiving: false,
        bountyAmount: 200,
        type: 'Jedi',
        id: uuid(),
    },
    {
        firstName: 'Hans',
        lastName: 'Solo',
        isLiving: false,
        bountyAmount: 300,
        type: 'Jedi',
        id: uuid(),
    },
    {
        firstName: 'Kylo',
        lastName: 'Ren',
        isLiving: true,
        bountyAmount: 400,
        type: 'Sith',
        id: uuid(),
    },
    {
        firstName: 'General',
        lastName: 'Hux',
        isLiving: true,
        bountyAmount: 500,
        type: 'Sith',
        id: uuid(),
    },
    {
        firstName: 'Darth',
        lastName: 'Dane',
        isLiving: true,
        bountyAmount: 600,
        type: 'Sith',
        id: uuid(),
    },
    {
        firstName: 'Sheev',
        lastName: 'Palpatine',
        isLiving: false,
        bountyAmount: 700,
        type: 'Sith',
        id: uuid(),
    },
]

app.use(bodyParser.json())
// app.get('/bounty',(req, res)=>{

//     const bountyQuery = bountyHunt.filter((bounty)=>{
//         return bounty.bountyAmount < req.query.maxbounty
//     })
//     res.send(bountyQuery)
//     console.log(bountyQuery)
// })

app.get('/bounty',(req, res)=>{
    if(!(Object.keys(req.query).length === 0 && req.query.constructor === Object)){
    const bountyQuery = bountyHunt.filter((bounty)=>{
        console.log(bounty.bountyAmount, Number(req.query.maxbounty),  bounty.living, req.query.living, bounty.type, req.query.type)
        return bounty.bountyAmount < Number(req.query.maxbounty) && bounty.living === JSON.parse(req.query.living) && bounty.type === req.query.type
    })
    console.log(bountyQuery)
    res.send(bountyQuery)
}
    else{res.send(bountyHunt)
    }
})

app.get('/bounty/:id',(req, res)=>{
    const singleBounty = bountyHunt.find(bounty => bounty.id===req.params.id)
    res.send(singleBounty)
})

app.delete('/bounty/:id', (req, res) => {
    const deleteBounty = bountyHunt.findIndex(bounty => bounty.id===req.params.id)

    bountyHunt.splice(deleteBounty, 1)
    res.send(bountyHunt)
})


app.post('/bounty',(req, res)=>{
    console.dir(req)
    console.log(req)
    bountyHunt.push(req.body)
    res.send(bountyHunt)
})

app.put('/bounty/:id',(req, res)=>{
    const updateBounty = bountyHunt.find(bounty => bounty.id === req.params.id)
    const updatedBounty = Object.assign(updateBounty, req.body)
    res.send(updatedBounty)
})


app.listen(5656, ()=>{
    console.log('list of Bounties')
})




