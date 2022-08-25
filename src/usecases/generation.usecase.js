const Generation = require('../models/generation.model')

//Uso de caso -> Crear Koder
const create = (data)=>{
    const generation = Generation.create(data)
    return generation
}

module.exports = { create }