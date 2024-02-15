const express = require("express");
const reservationController=require("../controlles/reservationController")
 const router=express.Router()

 router.get("/",reservationController.getAllProducts)
 router.get("/:id",reservationController.getProductsId)
 router.delete("/:id",reservationController.getProductDelete)
 router.post("/",reservationController.getAddNewProduct)
 router.patch("/:id",reservationController.getUptadeProducts)



 module.exports=router