const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoos')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/introdb', { useNewUrlParser: true })
    .then(()=> console.log('successfully connected to MongoDB'))
    .catch(err=> console.log(err))

app.use('/cars', require('./routes/carRoutes'))

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.post('/',(req, res)=>{
    res.send(req.body)
})

app.listen(5656, ()=>{
    console.log('the server is running in 5656 port')
})