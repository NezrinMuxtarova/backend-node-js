const express = require("express");
const productController=require("../controlles/productContraller")
 const router=express.Router()

 router.get("/",productController.getAllProducts)
 router.get("/:id",productController.getProductsId)
 router.delete("/:id",productController.getProductDelete)
 router.post("/",productController.getAddNewProduct)
 router.put("/:id",productController.getUptadeProducts)



 module.exports=router