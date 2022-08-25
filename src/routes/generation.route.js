//Endpoints
const express = require("express")
const { create } = require("../usecases/generation.usecase")

const router = express.Router()

//Endpoint de crear Generacion
router.post("/", async (request, response)=>{
    //Recibir el request
    //Response
    try{
    const { body } = request
    const generation = await create(body)
    response.status(201)
    response.json({
        sucess: true,
        data: {generation}
    })
    } catch(error){
    response.status(400)
    response.json({
        sucess: false,
        message: error.message
    })
}

})


module.exports = router