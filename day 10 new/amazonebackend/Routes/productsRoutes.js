const express = require('express');
const productsController= require('../controllers/productsController.js');

const  productsRouter = express.Router();

productsRouter.route('/')
.get(productsController.getAllProducts); 

module.exports = productsRouter;



