const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
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

 
const productModel= mongoose.model('Product',productSchema);

module.exports = productModel;


// const testProduct = new productModel({
//     name : 'Amit',
//     price : 600

// });


// testProduct.save().then((res) => {
//     console.log(res);
// })







