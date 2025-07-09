const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    author :{
        type: String,
        required: true,
        trim: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Book', bookSchema)
