//Endpoints
const express = require("express")
const { create, getMentors } = require("../usecases/mentor.usecase")

const router = express.Router()

//Endpoint de crear Mentor
router.post("/", async (request, response)=>{
    //Recibir el request
    //Response
    try{
    const { body } = request
    const mentor = await create(body)
    response.status(201)
    response.json({
        sucess: true,
        data: {mentor}
    })
    } catch(error){
    response.status(400)
    response.json({
        sucess: false,
        message: error.message
    })
}

})

//Endpoint de ver Mentores
router.get("/", async (request, response) => {
    try {
      const mentors = await getMentors()
      //console.log(mentors)
      response.json({
        mentors
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