const userModel = require("../models/userModel");

const signUp = async (req, res) => {
  const { userName, password, email, firstName, lastName, isAdmin } = req.body;
  if (!userName || !password || !email || !firstName || !lastName) {
    return res.status(400).send({ message: "fill all fields" });
  }
  try {
    const user = await userModel.findOne({ email: email });
    console.log(user);
    if (user) {
      res.status(400).send({ message: "this email already used" });
    } else {
      const newUser = new userModel({ ...req.body, isAdmin: false });

      try {
        await newUser.save();
        res
          .send({ message: "created successfully!!", data: newUser })
          .status(201);
      } catch (error) {
        res.send({ message: error.message }).status(500);
      }
    }
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const signIn = async (req, res) => {
  const { userName, password, email } = req.body;

  if (!userName || !password || !email) {
    return res.status(400).send({ message: "fill all fields" });
  }
  try {
    const user = await userModel.findOne({
      email: email,
      userName: userName,
      password: password,
    });
    if (!user) {
      return res
        .status(400)
        .send({ message: "email ve ya password yanlisdir" });
    }
    res.status(200).send({
      message: "succsessfully login!!!",
      userInfo: {
        isAdmin: user.isAdmin,
        userName: user.userName,
      },
    });
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await userModel.find({});
    res.send(products).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getProductsId = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await userModel.findById(id);
    res.send(product).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(500);
    console.log(error.message);
  }
};

const getProductDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await userModel.findByIdAndDelete(id);
    const products = await userModel.find({});
    res.send(deleteProduct).status(200);
  } catch (error) {
    res.send({ message: error.message }).status(500);
  }
};

const getAddNewProduct = async (req, res) => {
  const newProduct = new userModel(req.body);

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
    await userModel.findByIdAndUpdate(id, { ...req.body });
    const updatedProduct = await userModel.findById(id);
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
  signUp,
  signIn,
};
