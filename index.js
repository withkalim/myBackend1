import express from "express";
import { Login, Register } from "./controllers/auth.controller.js";
import { productCreate } from "./controllers/products.controller.js";
const forExpress = express();

forExpress.use(express.json());

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

// express with post method
forExpress.post("/register", Register);
forExpress.post("/login", Login);
forExpress.post("/product-created", productCreate);

forExpress.listen(8000, () =>
  console.log("Server is running on port number 8000")
);
