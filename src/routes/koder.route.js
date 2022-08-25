//Endpoints
const express = require("express")
const { create, getKoders } = require("../usecases/koder.usecase")

const router = express.Router()

//Endpoint de crear Koder
router.post("/", async (request, response)=>{
    //Recibir erl request
    //Response
    try{
    const { body } = request
    
    const koder = await create(body)
    response.status(201)
    response.json({
        sucess: true,
        data: {koder}
       
    })
    } catch(error){
    response.status(400)
    response.json({
        sucess: false,
        message: error.message
    })
}

})


//Endpoint de ver Koders
router.get("/", async (request, response) => {
    try {
      const koders = await getKoders()
      //console.log(koders)
      response.json({
        koders
      })
    }catch(error) {
      response.status(400)
      response.json({
        success: true,
        message: error.message
      })
    }
  })

module.exports = router