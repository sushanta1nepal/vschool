const mongoose = require('mongoose');
const invenSchema = new mongoose.Schema({

    item:{
        type: String,
        required: true,
        lowercase:true,
    },
    category:{
        type:String,
        required:true,
        lowercase:true,
    },
    type: {
        type: String,
        required:true,
        lowercase:true,
    },
    quantity:{
        type: Number,
        required: true,
        lowercase:true,
    },
    price:{
        type: Number,
        required:true,
        lowercase:true,
    }
})
console.log("model file", typeof mongoose.model("Inventory", invenSchema))
module.exports = mongoose.model("Inventory", invenSchema)