
const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (request, response)=>{
    response.json({message: "Bienvenido a nuestra API de arquitectura limpa"})
})

//! Solo exporta 1 cosa
module.exports = app