const mongoose = require('mongoose');
const carSchema = new mongoose.Schema({

    make: {
        type: String,
        required: true,
        lowercase: true,
    },
    model: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min:1850,
        max: 2019,
    },
    horsePower: {
        type: Number,
        required: true,
        min: 400,
        max: 5010,
    },
    type: {
        type: String,
        required: true,
        enum: ['super-sport','luxury','hyper']
    },
    prevOwners: [{
        type: Schema.types.objectId,
        ref: "User"

    }]
})

module.exports = mongoose.model('Car', carSchema)