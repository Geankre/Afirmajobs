const mongoose = require("mongoose")

const jobOpportunitySchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
      },
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true        
    },
    level: {
        type: String,
        required: true        
    },
    typeOfWorkingPlace: {
        type: String,
        required: true        
    },
    location: {
        type: String,
        required: true        
    },
    contractType: {
        type: String,
        required: true        
    },
    salaryRange: String,   
    description: {
        type: String,
        required: true
    },
    afirmativePolicies: {
        type: String,
        required: true        
    },
    attachment: {
        type: String,
        required: false
    },
    
}, { timestamps: true })

module.exports = mongoose.model("job", jobOpportunitySchema)