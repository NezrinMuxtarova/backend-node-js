const ProductModel = require("../models/ProductModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.send(products).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getProductsId = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    res.send(product).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getProductDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await ProductModel.findByIdAndDelete(id);
    const products = await ProductModel.find({});
    res.send(deleteProduct).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getAddNewProduct = async (req, res) => {
  const newProduct = new ProductModel(req.body);

  try {
    await newProduct.save();
    res
      .send({ message: "created successfully!!", data: newProduct })
      .status(201);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getUptadeProducts = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate(id, { ...req.body });
    const updatedProduct = await ProductModel.findById(id);
    res.status(200).send({
      message: "updated succesfully!",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductsId,
  getProductDelete,
  getAddNewProduct,
  getUptadeProducts,
};
