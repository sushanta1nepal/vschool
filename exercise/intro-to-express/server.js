const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const uuid = require('uuid/v4')
//arg1= is home page
//arg2=request response
//arg3=function to run
const sockStore = [
    {
        type: 'plain',
        cost: 200
    },
    {
        type: 'polka-dot',
        cost: 300
    }
]

//middleware
app.use(bodyParser.json())

//routes
app.get('/',(req, res)=>{

    const socksQueriedFor = sockStore.filter((sock)=>{
        return sock.cost < req.query.maxcost
    })

    res.send(socksQueriedFor)
})

//get a single sock

app.get('/socks/:id',(req, res)=>{
    //const foundSock = sockStore.filter(sock =>sock.id ==='1234')
    //res.send(foundSock[0]) older method
    const foundSock = sockStore.find(sock => sock.id===req.params.id)
    res.send(foundSock)
})

app.post('/socks',(req, res)=>{
    req.body.id=uuid()
    sockStore.push(req.body)
    res.send(sockStore)
})

app.get('/socks',(req, res)=>{
    res.send("hey sal do you know this is working?")
})

//listener
app.listen(5656, () => {
    console.log(`your server is up and running in port 5656`)
})