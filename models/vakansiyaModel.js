const mongoose = require("mongoose");

const { Schema } = mongoose;

const vakansiyaSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: String, required: true },
  city: { type: String, required: true },
  jobs: { type: String, required: true },
  country: { type: String, required: true },
  education: { type: String, required: true },
  age: { type: String, required: true },
  image: { type: String, required: true },
  position: { type: String, required: true },
});

const vakansiyaModel = mongoose.model("Vakansiya", vakansiyaSchema);
module.exports = vakansiyaModel;
