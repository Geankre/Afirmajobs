const jobOpportunitySchema = require("../models/jobOpportunitySchemaSchema")

const createJobOpportunity = async (request, response) => {
    try {
        const newjobOpportunity = new jobOpportunitySchema({
            userId: request.body.userId,
            position: request.body.position,
            company: request.body.company,
            level: request.body.level,
            typeOfWorkingPlace: request.body.typeOfWorkingPlace,
            location: request.body.location,
            contractType: request.body.contractType,
            salaryRange: request.body.salaryRange,
            description: request.body.description,
            afirmativePolicies: request.body.afirmativePolicies,
            attachment: request.body.attachment,               
        })
        const savedNewjob = await newjobOpportunity.save()
            response.status(201).send(savedNewjob)

    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

const getAllJob = async (request, response) => {
    try {
        jobOpportunitySchema.find(function (error, job) {
            if (error) {
                response.status(404).send({message: error.message})
            }
                response.status(200).send(job)
        })
 
    } catch (error) {
        response.status.send({message: error.message})
    }
}

const getJobPositionAndCompany = async (request, response) => {
    try {
        const jobFound = await jobOpportunitySchema.find({
            $or: [
            { position:  { $regex :  request.query.name, $options: 'i'} },
            { company:  { $regex :  request.query.name, $options: 'i'} }
            ]
        })
        .select("-userId")

        response.status(200).send(jobFound)
          
    } catch (error) {
        response.status(404).send({message: error.message})
    }
}

const getJobFilter = async (request, response) => {
    const { level, typeOfWorkingPlace, location, contractType, afirmativePolicies } = request.query
    let query = {}

    if(level) query.level = new RegExp(level, 'i')
    if(typeOfWorkingPlace) query.typeOfWorkingPlace = new RegExp(typeOfWorkingPlace, 'i')
    if(location) query.location = new RegExp(location, 'i')
    if(contractType) query.contractType = new RegExp(contractType, 'i')
    if(afirmativePolicies) query.afirmativePolicies = new RegExp(afirmativePolicies, 'i')
    
    try {
        const jobFound = await jobOpportunitySchema.find(query)
        .select("-userId")

        if(jobFound.length === 0) {
            response.status(404).send({
                message: "There are no jobs yet with this profile"
            })
        }

        response.status(200).send({jobFound})
    } catch (error) {
        response.status(404).send(error)
    }
}

const updateJobOpportunity = async (request, response) => {
    try {
        const jobFound = await jobOpportunitySchema.findById(request.params.id)

        jobFound.userId = request.body.userId ||  jobFound.userId
        jobFound.position = request.body.position || jobFound.position
        jobFound.company = request.body.company ||  jobFound.company
        jobFound.level = request.body.level || jobFound.level
        jobFound.typeOfWorkingPlace =  request.body.typeOfWorkingPlace || jobFound.typeOfWorkingPlace
        jobFound.location = request.body.location ||  jobFound.location
        jobFound.contractType = request.body.contractType || jobFound.contractType
        jobFound.salaryRange = request.body.salaryRange || jobFound.salaryRange 
        jobFound.description = request.body.description || jobFound.description
        jobFound.afirmativePolicies = request.body.afirmativePolicies || jobFound.afirmativePolicies,
        jobFound.attachment = request.body.attachment  || jobFound.attachment
                
        const savedJobOpportunityUpdate = await jobFound.save()
        response.status(200).send({
            "Job opportunity successfully updated": savedJobOpportunityUpdate
        })

    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

const deleteJobOpportunity = async (request, response) => {
    try {
        await jobOpportunitySchema.findByIdAndDelete(request.params.id)
        response.status(200).send({
            message: "Deleted Job opportunity",
            id: request.params.id
        })
    
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

module.exports = {
    createJobOpportunity,
    getAllJob,
    getJobPositionAndCompany,
    getJobFilter,
    updateJobOpportunity,
    deleteJobOpportunity
}