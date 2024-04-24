const express = require('express');
const reviewController = require('../controllers/reviewController');
const reviewRoutes = express.Router();


reviewRoutes.route('/')
.post(reviewController.createReview)
.get(reviewController.getAllReviews)
.patch(reviewController.updateReview)


reviewRoutes.route('/:id')
.delete(reviewController.deleteReview)





module.exports = reviewRoutes;


