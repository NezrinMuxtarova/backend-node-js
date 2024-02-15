const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  raiting:{type:Number, required: true},
});

const ProductModel = mongoose.model("Products", productSchema);
module.exports = ProductModel;
