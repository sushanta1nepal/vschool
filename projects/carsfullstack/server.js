const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const car = require('./routes/carRoutes');
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(bodyParser.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/carfullstack', {  newUrlParser:true})
    .then(()=> console.log('success in connection mongodb'))
    .catch(err => console.log(err))

app.use((req, res, next)=>{
    console.log('this is simply a text for middleware for every command')
    next()
})


app.use('/carslist', car)


app.listen(5656, ()=>{
    console.log('running on port 5656')
})

