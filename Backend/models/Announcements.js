const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const AnnouncementSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports= mongoose.model('announcements',AnnouncementSchema );