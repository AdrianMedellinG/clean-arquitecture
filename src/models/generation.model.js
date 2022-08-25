const mongoose = require("mongoose")

const generationsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true
    },
    type: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    mentors: [{
        name: {
            type: String,
            minlength: 3,
            maxlength: 20,
            required: true
        },
        module: {
            type: String
        },
        team: {
            type: String
        },
        generation: {
            type: String
        },
        age: {
            type: Number
        },
        sex: {
            type: String,
            enum: ["f", "m", "o"]
        },
        type: {
            type: String,
            enum: ["ProgramLead", "Mentor", "B-Mentor"]
        }
    }]
})

module.exports = mongoose.model("generations", generationsSchema)