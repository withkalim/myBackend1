import { Router } from "express";
import { AddProduct, AddedProduct} from "../controllers/products.controller.js";


const productRoutes = Router();

productRoutes.post("/product-add", AddProduct);
productRoutes.post("/added-product", AddedProduct);


export default productRoutes;