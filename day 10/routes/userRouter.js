const express = require("express");

let usersController = require("../controllers/usersController");
const userRouter = express.Router();

userRouter
  .route("/")
  .get(usersController.getUser)
  .post(usersController.postUser);

userRouter
  .route("/:id")
  .delete(usersController.deleteUser)
  .put(usersController.changeUser)
  .patch(usersController.updateUser);

module.exports = userRouter;