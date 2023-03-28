const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRouter");
const todoRouter = require("./routes/todoRouter");
const { dbUrl } = require("./config");

// Middlewares
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/app", userRouter);
app.use("/app/todo", todoRouter);

const mongoose = require("mongoose");
mongoose.connect(dbUrl).then(() => console.log("DB connection established"));

module.exports = app;
