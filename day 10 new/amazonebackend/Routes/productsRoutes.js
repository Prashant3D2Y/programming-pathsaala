const express = require('express');
const productsController= require('../controllers/productsController.js');

const  productsRouter = express.Router();

productsRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProduct)
.delete(productsController.deleteProduct)

productsRouter.route('/:id')
.put(productsController.replaceProduct);

module.exports = productsRouter;



