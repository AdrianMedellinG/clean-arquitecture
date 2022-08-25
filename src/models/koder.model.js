const mongoose = require("mongoose")

//Schemas de mongo
const koderSchema = new mongoose.Schema({
    nombre: {
        type:String,
        minlenght: 3,
        maxlenght: 20,
        required:true
    },
    modulo: {
        type:String,
    },
    generacion: {
        type:String,
        required:true
    },
    edad: {
        type:Number,
        minlenght: 18,
        maxlenght: 150,
    },
    sexo: {
        type:String,
        enum: ["F","M"]
    }
})


//Exportar (Modelos -> Collection)
module.exports = mongoose.model("koders", koderSchema)