const reservationModel = require("../models/reservationModels");

const getAllProducts = async (req, res) => {
  try {
    const products = await reservationModel.find({});
    res.send(products).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getProductsId = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await reservationModel.findById(id);
    res.send(product).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getProductDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await reservationModel.findByIdAndDelete(id);
    const products = await reservationModel.find({});
    res.send(deleteProduct).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getAddNewProduct = async (req, res) => {
  const newProduct = new reservationModel(req.body);

  try {
    await newProduct.save();
    res
      .send({ message: "created successfully!!", data: newProduct })
      .status(201);
    console.log(newProduct);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getUptadeProducts = async (req, res) => {
  const { id } = req.params;
  try {
    await reservationModel.findByIdAndUpdate(id, { ...req.body });
    const updatedProduct = await reservationModel.findById(id);
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
