const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    photoTestimonial: {
        type: String,
        required: true
    },
    name: {
        type : String,
        required : true
    },
    rate: {
        type : String,
        required : true
    },
    content: {
        type : String,
        required : true
    },
    familyName: {
        type: String,
        required: true
    },
    familyOccupation: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Testimonial', testimonialSchema)