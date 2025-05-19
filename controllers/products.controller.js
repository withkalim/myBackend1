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

    return res.json({ success: true, message: "add Product" });
  } catch (error) {
    console.log(error, "someting error in products controller");
    return res.json({ success: false, message: error });
  }
};
