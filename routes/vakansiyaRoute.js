const express = require("express");
const vakansiyaController=require("../controlles/vakansiyaController")
 const router=express.Router()

 router.get("/",vakansiyaController.getAllProducts)
 router.get("/:id",vakansiyaController.getProductsId)
 router.delete("/:id",vakansiyaController.getProductDelete)
 router.post("/",vakansiyaController.getAddNewProduct)
 router.put("/:id",vakansiyaController.getUptadeProducts)



 module.exports=router