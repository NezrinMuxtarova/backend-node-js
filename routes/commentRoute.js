const express = require("express");
const commnetController=require("../controlles/commentController")
 const router=express.Router()

 router.get("/",commnetController.getAllProducts)
 router.get("/:id",commnetController.getProductsId)
 router.delete("/:id",commnetController.getProductDelete)
 router.post("/",commnetController.getAddNewProduct)
 router.put("/:id",commnetController.getUptadeProducts)



 module.exports=router