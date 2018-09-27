const express = require('express');
const bodyParser = require ('body-parser');
const uuid = require('uuid/v4');
const app = express();
const Car = require('./routes/carRoutes')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res, next)=>{
    console.log('this is simply a text for middleware for every command')
    next()
})


app.use('/cars', Car)

app.post('/cars',(req, res)=>{
    superCars.push(req.body)
    res.send(Cars)
})

app.listen(5656, ()=>{
    console.log('running on port 5656')
})


