const express = require("express");
const announcemenetController = require("../controlles/announcementController");
const router = express.Router();

router.get("/", announcemenetController.getAllProducts);
router.get("/:id", announcemenetController.getProductsId);
router.delete("/:id", announcemenetController.getProductDelete);
router.post("/", announcemenetController.getAddNewProduct);
router.put("/:id", announcemenetController.getUptadeProducts);

module.exports = router;
