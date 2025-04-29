import e, { Router } from "express";
import User from "../models/user.schema.js";
import Product from "../model/produdct.schema";

const agpRoute = Router();

agpRoute.get("/matching-grouping", async (req, res) => {
  try {
    const products = await Product.aggregate([
      { $match: { price: { $gt: 500 } } },
    ]);
    return res.send(products);

  } catch (error) {
    console.log(error);
  }
});

export default agpRoute;
