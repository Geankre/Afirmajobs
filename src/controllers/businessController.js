const userSchema = require("../models/userSchema")
const businessSchema = require("../models/businessSchema")

const createBusinessProfile = async (request, response) => {
    try {
        const newBusiness = new businessSchema({
            userId: request.body.userId,
            name: request.body.name,          
            subTitle: request.body.subTitle,
            segment: request.body.segment,
            site: request.body.site,
            description: request.body.description,
            based: request.body.based,
            foundation: request.body.foundation,
            picture: request.body.picture,
            interest: request.body.interest                 
        })        
        const savedNewBusiness = await newBusiness.save()
            response.status(201).send(savedNewBusiness)

    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

const getAllBussinessProfiles = async (request, response) => {
    try {
        businessSchema.find(function (error, users) {
            if (error) {
                response.status(404).send({message: error.message})
            }
                response.status(200).send(users)
        })
 
    } catch (error) {
        response.status.send({message: error.message})
    }
}

const getbyName = async (request, response) => {
    try {
        const userFound = await userSchema.find({
            name: { $regex :  request.query.name, $options: "i"}
        })
        .select("-userId")

        const businessFound = await businessSchema.find({
            name: { $regex :  request.query.name, $options: "i"}
        })
        .select("-userId")

        if (userFound.length > 0 && businessFound.length > 0) {
            response.status(200).send({ userFound, businessFound })
        } 

        if (userFound && businessFound.length === 0) {
            response.status(200).send(userFound)
        } 
        
        else if (userFound.length === 0 && businessFound) {
            response.status(200).send(businessFound)
        } 
      
    } catch (error) {
        response.status(404).send({message: error.message})
    }
}

const getProfileUserFilter = async (request, response) => {
    const { resident, race, gender, sexualOrientation, subTitle } = request.query
    let query = {}

    if(resident) query.resident = new RegExp(resident, 'i')
    if(race) query.race = new RegExp(race, 'i')
    if(gender) query.gender = new RegExp(gender, 'i')
    if(sexualOrientation) query.sexualOrientation = new RegExp(sexualOrientation, 'i')
    if(subTitle) query.subTitle = new RegExp(subTitle, 'i')
    
    try {
        const profileFound = await userSchema.find(query)
        .select("-userId")

        if(profileFound.length == 0) {
            response.status(404).send({
                message: "There are no users yet with this profile"
            })
        }
        response.status(200).send({profileFound})

    } catch (error) {
        response.status(404).send(error)
    }
}

const getByInterest = async (request, response) => {
    try {
        const userFound = await userSchema.find({
            interest: { $regex :  request.query.interest, $options: "i"}
        })
        .select("-userId")

        const businessFound = await businessSchema.find({
            interest: { $regex :  request.query.interest, $options: "i"}
        })
        .select("-userId")

        if (userFound.length > 0 && businessFound.length > 0) {
            response.status(200).send({ userFound, businessFound })
        } 

        if (userFound && businessFound.length === 0) {
            response.status(200).send(userFound)
        } 
        
        else if (userFound.length === 0 && businessFound) {
            response.status(200).send(businessFound)
        } 

    } catch (error) {

    }
}

const updateBussinessProfile = async (request, response) => {
    try {
        const businessFound = await businessSchema.findById(request.params.id)

        businessFound.userId = request.body.userId ||  businessFound.userId
        businessFound.name = request.body.name || businessFound.name
        businessFound.subTitle = request.body.subTitle ||  businessFound.subTitle
        businessFound.segment =  request.body.segment || businessFound.segment
        businessFound.site = request.body.site ||  businessFound.site
        businessFound.description = request.body.description || businessFound.description
        businessFound.based = request.body.based || businessFound.based 
        businessFound.foundation = request.body.foundation || businessFound.foundation
        businessFound.picture = request.body.picture  || businessFound.picture
        businessFound.interest = request.body.interest || businessFound.interest

        const savedProfileUpdate = await businessFound.save()
        response.status(200).send({
            "Profile successfully updated": savedProfileUpdate
        })

    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

const deleteBusinessProfile = async (request, response) => {
    try {
        await businessSchema.findByIdAndDelete(request.params.id)
        response.status(200).send({
            message: "Deleted Profile",
            id: request.params.id
        })
    
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

module.exports = {
    createBusinessProfile,
    getAllBussinessProfiles,
    getbyName,
    getProfileUserFilter,
    getByInterest,
    updateBussinessProfile,
    deleteBusinessProfile
}