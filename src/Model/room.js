const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    users:{
        type: Array,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('rooms', roomSchema)