const mongoose=require('mongoose');
const {Schema}=require('mongoose');


const ReplySchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const QuerySchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type: String,
        required: true
    },
    type:{
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
    },
    replies: [ReplySchema] // Embedding the Reply Schema as an array

});

module.exports= mongoose.model('query',QuerySchema);