const Koder = require('../models/koder.model')

//Uso de caso -> Crear Koder
const create = (koderData)=>{
    const koder = Koder.create(koderData)
    return koder
}

//Uso de caso -> Obtener Koders
//? https://mongoosejs.com/docs/api.html#model_Model-find
const getKoders = () => {
    return Koder.find({})
}

module.exports = { create, getKoders }