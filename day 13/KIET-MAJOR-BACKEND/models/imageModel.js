const mongoose = require("mongoose");
const imageSchema = mongoose.Schema({
    title :{
        type: String,
        unique: true,
        required: true,

     },
    price:{
        type: Number,
        required: true,
        
    }, 
    description: String,
    image:String,
    createdAt:{
        type: Date,
        default: new Date()
    },
    updateAt:{
        type: Date,
        default: new Date()
    },
    
})

 
const imageModel= mongoose.model('ai-image', imageSchema);

module.exports = imageModel;
