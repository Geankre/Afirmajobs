const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const checkAuth = async (request, response, next) => {
    const authHeader = request.get("authorization")
    
    const token = authHeader.split(" ")[1]
    console.log("TOKEN", token)

    if(!token) {
        response.status(401).send("Erro no Header") 
    }
    try {

        jwt.verify(token, SECRET, function(error){
            if(error) {
            response.status(403).send("Unauthorized")
            }
        })

        next()

    } catch (error) {
        response.status.send({message: error.message})
    }
}
