const mongoose = require('mongoose');
const carSchema = new mongoose.Schema({

    make: {
        type: String,
        required: true,
        lowercase: true,
        // trim: true,
    },
    model: {
        type: String,
        required: true,
        // trim: true,
    },
    price:{
        type: Number,
        required: true,
        // trim: true,
    },
    year: {
        type: Number,
        required: true,
        // trim: true,
        // min:1850,
        // max: 2019,
    },
    horsePower: {
        type: Number,
        required: true,
        // trim: true,
        // min: 400,
        // max: 5010,
    },
    category: {
        type: String,
        required: true,
        // trim: true,
        enum: ['super sport','luxury','hyper']
    },
    image: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Car', carSchema)




//Vschool fullstack project 
//mychores
//groupchores