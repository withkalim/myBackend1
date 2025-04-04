// this index.js for starting part of routes folder
import { Router } from "express";
import authRouter from "./auth.routes.js";
import productRoutes from "./product.routes.js";
// import userRouter from "./user.routes";

const Allrouter = Router();

Allrouter.use("/auth", authRouter);
Allrouter.use("/product", productRoutes);
// Allrouter.use("user", userRouter);


export default Allrouter;
