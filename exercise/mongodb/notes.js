const express =require('express')
const carRouter = express.Router()
const Cars = require('../models/car')

app.use((req, res, next)=>{
    console.log()
    next()
})
app.use('/:id',(req, res, next)=>{
    console.log()
    next()
})
app.route('/')
    .get((req,res)=>{
       Cars.find((err, cars)=>{
           if(err) return res.status(500).send({msg:'an error occured at the server'})
           return res.status(200).send(cars)
       })
    })

   
    .post('/',(req, res)=>{
        const newCar = new Cars(req.body)
        newCar.save((err, NewSavedCar)=>{
            if(err) res.send(500).send({msg:'an error occured in the server'})
            return res.status(201).send({NewSavedCar, msg:'you new car has been added'})
        })
        
    })

app.route('/:id')
   
    .get((req, res)=>{
        Cars.findById(req.params.id, (err, foundCar)=>{
            if (err) return res.status(500).send({msg:"these is an internal servererror"})
            return res.status(200).send(foundCar)
        })
    })
    
    .delete((req, res)=>{
        Cars.fineOneAndDelete(
            {_id: req.params.id},
            (err, DeleteCar)=>{
                if(err) return res.status(500).send({msg:'there is an internal server error'})
                return res.status(200),send({DeleteCar, msg:'you vehicle has been deleted'})
            }
        )
        
    })
   
    .put((req, res)=>{
        Cars.fineOneAndUpdate(
            { _id: req.params.id},
            req.body, 
            {new: true},
            (err, updatedCar)=>{
                if(err) return res.status(500).send({msg:'there is an internal server error'})
                return res.status(201).send({updatedCar},{msg:'you car list has been updated'})
            }
             )
        
    })

module.exports = carRouter