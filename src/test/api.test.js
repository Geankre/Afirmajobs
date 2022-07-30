const request = require("supertest")
const app = require ("../app")

let token
let elementId

describe("SignUp afirmajobs test", () => {
    //(nome do método rota, (done) =>)
    // it("POST /signUp/create", (done) => {
    //     request(app)
    //         .post("/user/signup")
    //         .expect("Content-Type", /json/)
    //         .send({
    //             email: "afirmajobs@email.com",
    //             password: "1234",
    //             role: "user"
    //         })
    //         .expect(201)
    //         .end((err, res) => {
    //             if(err) return done(err)
    //             elementId = res.body._id
    //             return done()
    //         })
    // })
    
    
    it("GET /signUp/all", (done) => {
        request(app)
            .get("/signUp/all")
            .set("authorization", `${token}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.length).toBe(0)
            })
            .end((err,res) => {
                if(err) return done(err)
                token = res.body.token
                return done()
            })
    })



    
})
