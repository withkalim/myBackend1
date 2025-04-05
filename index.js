import express from "express";
import Allrouter from "./routes/index.js";
import morgan from "morgan";

const forExpress = express();

forExpress.use(express.json());
forExpress.use(morgan("combined"));

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

forExpress.listen(8000, () =>
  console.log("Server is running on port number 8000")
);
