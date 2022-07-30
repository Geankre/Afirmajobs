const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId:  {
        type: mongoose.Types.ObjectId,
        ref: "signUp"
    },
    name: {
        type: String,
        required: true
    },
    pronoun: String,
    subTitle: {
        type: [String],
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    resident: {
        type: String,
        required: true
    },
    race:{
        type: String,
        required: true
    },
    genderIdentity: {
        type: String,
        required: true
    },
    sexualOrientation: {
        type: String,
        required: true  
    },
    desability: {
        type: Boolean, 
        required: false   
    },
    phone: Number,
    lookJob: {
        type: Boolean, 
        required: false   
    },
    offerJob: {
        type: Boolean, 
        required: false   
    },
    education: [
        {
            institution: String,
            course: String,
            fieldOfStudy: String,
            status: String,
            start: String,
            finish: String
        }
    ],
    workExperience: [
        {
            title: String,
            typeOfContract: String,
            company: String,
            location: String,
            descriptionJob: String,
            currentJob: Boolean,
            start: String,
            finish: String
        }
    ],
    language: [
        {
            language:  String,
            level: String,
        }
    ],
    description:{
        type: String,
        required: false        
    },
    picture: {
        type: String,
        required: true
    },
    otherSocialMedia: [String],
    interest: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)
