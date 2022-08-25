const Mentor = require('../models/mentor.model')

//Uso de caso -> Crear Mentor
const create = (mentorData)=>{
    const mentor = Mentor.create(mentorData)
    return mentor
}

//Uso de caso -> Obtener Mentores
//? https://mongoosejs.com/docs/api.html#model_Model-find
const getMentors = () => {
    return Mentor.find({})
}


//Uso de caso -> Actualizar Mentores
//? https://mongoosejs.com/docs/api.html#model_Model-find
const updateMentor = (mentorData) => {
    const mentor = Mentor.findByIdAndUpdate(id, mentor, {returnDocument:"after"})
    return mentor
}


//Uso de caso -> Delete Mentores
//? https://mongoosejs.com/docs/api.html#model_Model-find
const deleteMentor = (mentorData) => {
    const mentor = Mentor.findByIdAndDelete(mentorData)
    return mentor
}


module.exports = { create , getMentors,updateMentor, deleteMentor} 