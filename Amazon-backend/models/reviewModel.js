const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({

    reviewtitle: {
        type: String,
        required: true
    },
    userId: {
        type:String,
        required: true,
        unique: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        min : 1,
        max : 5,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }

})


const reviewModel = mongoose.model('review',reviewSchema);

// const testModel = new  reviewModel({
//     userId: "1234567891234",
//     reviewtitle: "Good Product",
//     productId: "6621fd3e067339032cb412c4",
//     rating: 4,
//     description: "Very good product",
//     createdAt: new Date(),
//     updatedAt: new Date()




// // })
// testModel.save().then((res)=>{
//     console.log(res)
// });





module.exports = reviewModel;