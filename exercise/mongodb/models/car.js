const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({

    make: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["dodge", 'gm', 'chevrolet', 'ford', 'tesla']

    },
    model: String,
    year: Number,
    color: String,
    prevOwners: [{
        type: Schema.types.objectId,
        ref: "User"

    }],
    tireProvider: {
        type: Schema.Types.ObjectId, 
        ref: "TireProvider"
    }
})

module.exports = mongoose.model("TireProvider", carSchema)