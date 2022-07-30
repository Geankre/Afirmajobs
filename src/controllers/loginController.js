const signUpSchema = require("../models/signUpSchema")
const bcrypt = require("bcrypt")
const jwt =  require("jsonwebtoken")
const SECRET = process.env.SECRET

const login = async (request, response) => {
    try {
        signUpSchema.findOne({ email: request.body.email}, (error, user) => {
            if(!user) {
                return response.status(401).send({
                    message: "User not found"
                })
            }
            const validPassword = bcrypt.compareSync(request.body.password, user.password)

            if(!validPassword) {
                return response.status(401).send({
                    message: "Unauthorized login",
                    stausCode: 401
                 })
            }
            const token = jwt.sign({id: user._id}, SECRET)
           
            response.status(200).send({
                message: "Authorized login",
                token
            })
        })

    } catch {
        response.status(500).send({message: error.message})
    }
}

module.exports = {
    login
}