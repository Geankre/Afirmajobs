const mongoose = require('mongoose')

const businessSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId:  {
        type: mongoose.Types.ObjectId,
        ref: "signUp"
    },
    name: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: false
    },
    segment:{
        type: String, 
        required: true   
    },
    site: String,
    description: String,
    based:{
        type: String, 
        required: true
    },
    foundation: Number,
    picture: {
        type: String,
        required: true
    },
    interest: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
},{ timestamps: true })

module.exports = mongoose.model("business", businessSchema)
