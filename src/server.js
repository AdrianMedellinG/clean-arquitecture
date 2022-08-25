
const express = require("express")

const app = express()

//Routes
const routerKoder = require("./routes/koder.route")
const routerMentor = require("./routes/mentor.route")
const routerGeneration = require("./routes/generation.route")
const routerUser = require("./routes/user.route")
const routerAuth = require("./routes/auth.route")

//Middlewares del json
app.use(express.json())

//Middleware de routes (Koders)
app.use("/koders", routerKoder)
//Middleware de routes (Mentors)
app.use("/mentors", routerMentor)
//Middleware de routes (Mentors)
app.use("/generation", routerGeneration)
//Middleware de routes (Users)
app.use("/users", routerUser)
//Middleware de routes (Auth)
app.use("/auth", routerAuth)




//General
app.get("/", (request, response)=>{
    response.json({message: "Bienvenido a nuestra API de arquitectura limpa"})
})

//! Solo exporta 1 cosa
module.exports = app