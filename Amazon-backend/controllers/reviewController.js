


const ReviewModel = require('../models/reviewModel');

// Create a new review
const createReview = async (req, res) => {
    try {
        const { reviewtitle, userId, productId, rating, description } = req.body;
        
        const newReview = new ReviewModel({
            reviewtitle,
            userId,
            productId,
            rating,
            description
        });

        const savedReview = await newReview.save();

        res.status(201).json({
            status: "success",
            data: {
                review: savedReview
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};

// Get all reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.find();
        
        res.json({
            status: "success",
            results: reviews.length,
            data: {
                reviews
            }
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message
        });
    }
};

// Update a review
const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { reviewtitle, userId, productId, rating, description } = req.body;
        
        const updatedReview = await ReviewModel.findByIdAndUpdate(id, {
            reviewtitle,
            userId,
            productId,
            rating,
            description
        }, { new: true });

        if(updatedReview)
        {
            console.log("yeS");
        }
        res.json({
            status: "success",
            data: {
                review: updatedReview
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};

// Delete a review
const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        
        await ReviewModel.findByIdAndDelete(id);

        res.status(204).json({
            status: "success",
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};

module.exports = { createReview, getAllReviews, updateReview, deleteReview };


  