import Product from "../model/produdct.schema.js";
import User from "../model/user.schema.js";

export const AddProduct = async (req, res) => {
  try {
    const { productName, price, quantity, category, productImage } =
      req.body.productData;
    const { userId } = req.body;
    console.log(
      productName,
      price,
      quantity,
      category,
      productImage,
      "This are productName, price, quantity, category, productimage"
    );
    console.log(userId, " This is userId");

    const isUserExist = await User.findById(userId);
    console.log(isUserExist, " isUserExist");
    if (!isUserExist) {
     return res.json({ success: false, message: "User not found" });
    }

    if (isUserExist.role != "seller") {
      return res.json({
        success: false,
        message: "You are not seller to add product",
      });
    }

    const newProduct = Product({
      productName,
      price,
      quantity,
      category,
      productImage,
      userId,
    });
    await newProduct.save();
    console.log(" This all are newProduct data ", newProduct);

    return res.json({ success: true, message: "Product successfully created " });
  } catch (error) {
    console.log(error, "someting error in products controller");
    return res.json({ success: false, message: error });
  }
};
