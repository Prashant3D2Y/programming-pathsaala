const mongoose = require("mongoose");

const productScohema = mongoose.Schema({
    title : String,
    price: Number,
})

 
const productModel= mongoose.model('Product',productScohema);

const testProduct = new productModel({
    name : 'Amit',
    price : 600

});


testProduct.save().then((res) => {
    console.log(res);
})