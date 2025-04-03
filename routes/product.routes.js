import { Router } from "express";
import { productCreate } from "../controllers/products.controller.js";


const productRoutes = Router();

productRoutes.post("/productcreated", productCreate);

export default productRoutes;