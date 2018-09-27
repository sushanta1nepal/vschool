const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(bodyParser.json())
app.use(morgan('dev'))

//app.use(/seniorPlayer, seniorRouter)

mongoose.connect('mongodb://locallost:27017/crudstore', { newUrlParser:true })
.then(()=> console.log('successful connection to MongoDB'))
.catch(err => console.log(err))

app.listen(5656, ()=>{
    console.log('Server is running on Port 5656')
})