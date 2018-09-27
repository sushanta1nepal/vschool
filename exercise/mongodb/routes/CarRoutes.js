const express = require('express');
const carRouter = express.Router()

carRouter.get('/', (req, res)=>{
    console.log('mongoDB is running')
    res.send('hello world')
})








module.export = carRouter