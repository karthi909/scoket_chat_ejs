const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name:{
        type: String,
    },
    profile_name:{
        type: String,
        unique: true
    },
    user_email:{
        type: String,
        unique: true,
        required: true
    },
    user_password:{
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = mongoose.model('users', user)