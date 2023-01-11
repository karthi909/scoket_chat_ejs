const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const chatSchema = new mongoose.Schema({
    chatId:{
        type: ObjectId,
        ref:'rooms'
    },
    from_id:{
        type:ObjectId,
        ref:'users'
    },
    to_id:{
        type: ObjectId,
        ref:'users'
    },
    message:{
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = mongoose.model('chats', chatSchema)