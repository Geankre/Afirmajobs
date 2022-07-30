const userSchema = require("../models/userSchema")
const businessSchema = require("../models/businessSchema")

const createUserProfile = async (request, response) => {
    try {
        const newProfile = new userSchema({
            userId: request.body.userId,
            name: request.body.name,
            pronoun: request.body.pronoun,
            subTitle: request.body.subTitle,
            country: request.body.country,
            city: request.body.city,
            resident: request.body.resident,
            race: request.body.race,
            genderIdentity: request.body.genderIdentity,
            sexualOrientation: request.body.sexualOrientation,
            desability: request.body.desability,
            phone: request.body.phone,
            lookJob: request.body.lookJob,
            offerJob: request.body.offerJob,
            education: request.body.education,
            workExperience: request.body.workExperience,
            language: request.body.language,
            description: request.body.description,
            picture: request.body.picture,
            otherSocialMedia: request.body.otherSocialMedia,
            interest: request.body.interest        
        })
            const savedNewProfile = await newProfile.save()
                response.status(201).send(savedNewProfile)

    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

const getAllUserProfiles = async (request, response) => {
    try {
        userSchema.find(function (error, users) {
            if (error) {
                response.status(404).send({message: error.message})
            }
                response.status(200).send(users)
        })
 
    } catch (error) {
        response.status(500).send({message: error.message})
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

const updateUserProfile = async (request, response) => {
    try {
        const userFound = await userSchema.findById(request.params.id)

            userFound.userId = request.body.userId || userFound.userId
            userFound.name = request.body.name || userFound.name
            userFound.pronoun = request.body.pronoun || userFound.pronoun
            userFound.subTitle = request.body.subTitle || userFound.subTitle 
            userFound.country = request.body.country || userFound.country 
            userFound.city = request.body.city || userFound.city
            userFound.resident = request.body.resident || userFound.resident
            userFound.race = request.body.race || userFound.race
            userFound.genderIdentity = request.body.genderIdentity || userFound.genderIdentity
            userFound.sexualOrientation = request.body.sexualOrientation || userFound.sexualOrientation
            userFound.desability = request.body.desability || userFound.desability 
            userFound.phone = request.body.phone || userFound.phone 
            userFound.lookJob = request.body.lookJob || userFound.lookJob
            userFound.offerJob = request.body.offerJob || userFound.offerJob
            userFound.education = request.body.education || userFound.education
            userFound.workExperience = request.body.workExperience || userFound.workExperience
            userFound.language =  request.body.language || userFound.language
            userFound.description = request.body.description || userFound.description
            userFound.picture = request.body.picture || userFound.picture
            userFound.otherSocialMedia = request.body.otherSocialMedia || userFound.otherSocialMedia
            userFound.interest = request.body.interest || userFound.interest
                         
        const savedProfileUpdate = await userFound.save()
        response.status(200).json({
            "Profile successfully updated": savedProfileUpdate
        })

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const deleteUserProfile = async (request, response) => {
    try {
        await userSchema.findByIdAndDelete(request.params.id)
        response.status(200).json({
            message: "Deleted Profile",
            id: request.params.id
        })
    
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

module.exports = {
    createUserProfile,
    getAllUserProfiles,
    getbyName,
    getByInterest,
    updateUserProfile,
    deleteUserProfile
}