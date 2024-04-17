const express = require("express");

let productController = require("../controller/productsController");

const productRouter = express.Router();

productRouter
  .route("/")
  .get(productController.getAllProduct)
  .post(productController.addProduct);

productRouter
  .route("/:id")
  .put(productController.updateProduct)
  .delete(productController.deleteProduct)
  .patch(productController.patchProduct);

module.exports = productRouter;