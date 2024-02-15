const mongoose = require("mongoose");

const { Schema } = mongoose;

const announcementSchema = new Schema({
  position: { type: String, required: true },
  salary: { type: String, required: true },
  workingHours: { type: String, required: true },
  city: { type: String, required: true },
  contact: { type: String, required: true },
  age: { type: String, required: true },
  
  
  
});

const announcemnetModel = mongoose.model("Announcement", announcementSchema);
module.exports = announcemnetModel;
