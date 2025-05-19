import { Router } from "express";
import { AddProduct } from "../controllers/products.controller.js";


const productRoutes = Router();

productRoutes.post("/product-add", AddProduct);

export default productRoutes;