const express = require("express");
const imageRouter = express.Router();
const { generateImage,getAllImages } = require("../controllers/imageController.js");

imageRouter.route('/image-genrate').post(generateImage)
imageRouter.route('/get-all-image').get(getAllImages)

module.exports = imageRouter;