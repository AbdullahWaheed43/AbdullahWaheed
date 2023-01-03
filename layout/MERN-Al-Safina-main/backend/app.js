const express = require("express");
const app = express();
const cors = require('cors')
const user_router = require("./routes/user_router");
const cartRouter = require("./routes/cartRouter")
const orderRouter = require("./routes/orderRouter")
const adminRouter = require("./routes/adminRouter")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const HttpError = require("./models/HttpError")

app.use(bodyParser.json());
app.use(cors())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/user", user_router);
app.use("/cart", cartRouter)
app.use("/order", orderRouter)
app.use("/admin", adminRouter)

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  return next(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.l7gmh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT || 1000);
  })
  .catch((err) => {
    console.log("error", err);
  });