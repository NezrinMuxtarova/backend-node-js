const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    image:{type:String}
});

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;
