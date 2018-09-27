const express = require('express');
const invenRouter = express.Router();
const Inventory = require('../models/inventory');

// app.use((req,res,next)=>{
//     console.log()
//     next()
// })
// app.use('./:id',(req,res)=>{
//     console.log()
//     next()
// })



invenRouter.route('/')
    .get((req,res)=>{
        console.log(typeof Inventory)
        Inventory.find((err, Inventory)=>{
            if(err) return res.status(500).send({msg:'internal error occured with server'})
            return res.status(200).send(Inventory)
        })
    })

    .post((req, res)=>{
        const newInven = new Inventory(req.body)
        newInven.save((err, newSavedInven)=>{
            if(err) res.send(500).send({msg:'internal error occured with server'})
            return res.status(201).send({newSavedInven, msg:'New item added to Inventory'})
        })
    })

invenRouter.route('/:id')
    .get((req,res)=>{
        Inventory.findById(req.params.id,(err,foundInventory)=>{
            if(err) return res.status(500).send({msg:'there is an internal server error'})
            return res.status(200).send(foundInventory)
        })

    })

    .delete((req,res)=>{
        Inventory.findOneAndDelete(
            {_id: req.params.id},
            (err, deleteInventory)=>{
                if(err) return res.status(500).send({msg:'there is an internal server error'})
                return res.status(200).send({deleteInventory, msg:'you item has been deleted'})
            }
        )
    })

    .put((req,res)=>{
        Inventory.findOneAndUpdate(
        { _id: req.params.id},
        req.body,
        {new: true},
        (err, updatedInventory)=>{
            if(err) res.status(500).send({msg:'there is an internal server error'})
            return res.status(200).send({updatedInventory, msg:' your new item has been added'})
        }
    ) 
   })

module.exports = invenRouter