import express from "express";
import Allrouter from "./routes/index.js";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const forExpress = express();

forExpress.use(express.json());
forExpress.use(morgan("combined"));
dotenv.config();
forExpress.use(cors());

forExpress.get("/", (req, res) => {
  res.send("Welcome to backend");
});
forExpress.get("/book", (req, res) => {
  res.send("Read my books");
});
forExpress.get("/cars", (req, res) => {
  res.send("Welcome to cars universe");
});
forExpress.get("/products", (req, res) => {
  res.send("all products");
});

forExpress.use("/api/v1", Allrouter);

mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log("mongoDB Connected");
});

forExpress.listen(8000, () =>
  console.log("Server is running on port number 8000")
);
