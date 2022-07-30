const mongoose = require("mongoose")

const signUpSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        enum: ["user", "business"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { timestamps: true })

module.exports = mongoose.model("signUp", signUpSchema)
