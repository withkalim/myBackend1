import { Router } from "express";
import {
  AddProduct,
  AddedProduct,
  AllUserProducts,
} from "../controllers/products.controller.js";

const productRoutes = Router();

productRoutes.post("/product-add", AddProduct);
productRoutes.post("/added-product", AddedProduct);
productRoutes.get("/alluser-product", AllUserProducts);

export default productRoutes;
