const express = require("express");
const userController = require("../controlles/userControllers");
const router = express.Router();

 router.get("/users", userController.getAllProducts);
 router.get("/users/:id", userController.getProductsId);
router.delete("/users/:id", userController.getProductDelete);
router.post("/users", userController.getAddNewProduct);
router.put("/users/:id", userController.getUptadeProducts);
router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);


module.exports = router;
