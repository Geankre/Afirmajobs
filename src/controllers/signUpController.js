const signUpSchema = require("../models/signUpSchema")
const bcrypt = require("bcrypt")


const signUp = async (request, response) => {
    const hashedPassword = bcrypt.hashSync(request.body.password, 10)
    request.body.password = hashedPassword

    try {
        const registration = new signUpSchema({
            email: request.body.email,
            password: request.body.password,
            role: request.body.role
        })

        const emailExists = await signUpSchema.exists({ email: request.body.email })
        if(emailExists) {
            return response.status(400).send({
                message: "The email already exists"
        })}

        if(signUp.email === "" || signUp.password === "") {
            return response.status(400).send({ message: "Complete the required fields" })
        }

        const savedUser = await registration.save()
            response.status(201).send(savedUser)

    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

const getAll = async (request, response) => {
    try {
        signUpSchema.find(function (error, users) {
            if (error) {
                response.status(404).send({message: error.message})
            }
                response.status(200).send(users)
        })
 
    } catch (error) {
        response.status.send({message: error.message})
    }
}

const updateEmail = async (request, response) => {
    try {
        const idRequest = request.params.id
        const signUpFound = await signUpSchema.findById(idRequest)

        if(!signUpFound){
            response.status(404).send({
                statusCode: 404,
                message: "User not found"                
            })
        }

        signUpFound.email = request.body.email || signUpFound.email
                
        const savedSignUp = await signUpFound.save()
        response.status(200).json({
            "E-mail successfully updated": savedSignUp
        })

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const UpdatePassword = async (request, response) => {
    
    try {      
        const idRequest = request.params.id
        const signUpFound = await signUpSchema.findById(idRequest)
               
        if(!signUpFound){
            response.status(404).send({
                statusCode: 404,
                message: "User not found"                
            })
        }
        
        const newhashedPassword = bcrypt.hashSync(request.body.password, 10)
        request.body.password = newhashedPassword
        signUpFound.password = request.body.password

        const savedNewPassword = await signUpFound.save()
        
        response.status(200).json({
            message: "Updated password ",
            savedNewPassword
        })

    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}

const deleteUser = async (request, response) => {
    try {
        const deleteUser = await signUpSchema.findByIdAndDelete(request.params.id)
        response.status(200).json({
            message: "Deleted user",
            id: request.params.id
        })
    
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
}


module.exports = {
    signUp,
    getAll,
    updateEmail,
    UpdatePassword,
    deleteUser
}