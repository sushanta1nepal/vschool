const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const invenRouter = require('./routes/inventory')
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/inventory', invenRouter)

mongoose.connect('mongodb://localhost:27017/crudstore', {  newUrlParser:true})
    .then(()=> console.log('success in connection mongodb'))
    .catch(err => console.log(err))



app.listen(5656, ()=>{
    console.log('server running on port 5656')
})