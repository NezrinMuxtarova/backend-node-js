const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routerProduct = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");
const reservationRouter=require("./routes/reservationRoute")
const commentRouter=require("./routes/commentRoute")
const vakansiyaRouter=require("./routes/vakansiyaRoute")
const announcementRouter=require("./routes/announcementRoute")
// const { Schema } = mongoose;

require("dotenv").config();
const DB = `mongodb+srv://gd728s0m9:nazrin2003@cluster0.nyudruu.mongodb.net/`;

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected successfully!!!"),
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/products", routerProduct);
app.use("/", userRouter);
app.use("/reservation", reservationRouter)
app.use("/comment",commentRouter)
app.use("/vakansiya",vakansiyaRouter)
app.use("/announcement",announcementRouter)