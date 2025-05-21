import User from "../model/user.schema";

export const AddProduct = (req, res) => {
  try {
    const { productname, price, quantity, category, productimage } =
      req.body.productData;
    const { userId } = req.body;
    console.log(
      productname,
      price,
      quantity,
      category,
      productimage,
      "This are productname, price, quantity, category, productimage"
    );
    console.log(userId, " This is userId");

    const isUserExist = User.findById(userId);
    console.log(isUserExist, " isUserExist");
    if (!isUserExist) {
      res.json({ success: false, message: "User not found" });
    }

    if (isUserExist.role != "seller") {
      res.json({
        success: false,
        message: "You are not seller to add product",
      });
    }

    return res.json({ success: true, message: "add Product" });
  } catch (error) {
    console.log(error, "someting error in products controller");
    return res.json({ success: false, message: error });
  }
};
