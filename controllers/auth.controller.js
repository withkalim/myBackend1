import User from "../model/user.schema.js";
import bcrypt from "bcrypt";

export const Register = async (req, res) => {
  try {
    console.log("Received data: ", req.body);
    const { name, email, password, conformPassword } = req.body.userData;
    console.log(name, email, password, conformPassword);

    if (!name || !email || !password || !conformPassword) {
      return res.json({ success: false, message: "All field mandatory" });
    }
    if (password !== conformPassword) {
      return res.json({
        success: false,
        message: "Password not matched",
      });
    }
    const isEmailExist = await User.find({ email: email });
    // const isEmailExist = await User.deleteOne({ email: email});

    console.log(isEmailExist, "isemailexist");
    if (isEmailExist?.length > 0) {
      return res.json({
        success: false,
        message: "Email already taken, please use another one",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    console.log(password, "password", hashPassword, "New Hashpassword");

    // save data to mongoDB
    const newUser = await User({
      name: name,
      email: email,
      password: hashPassword,
    });

    const responsefromDB = await newUser.save();
    console.log(newUser, "recent newUSer");

    return res.json({ success: true, message: "Horrey Register Successfull" });
  } catch (error) {
    console.error("Registration error", error);
    res.json({ success: false, message: "Server Error" });
  }
};








// for login
// export const Login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.json({ success: false, message: "All field are mandatery" });
//     }
//     const isUserExist = await User.findOne({ email, password });
//     console.log(isUserExist, "Check user exist in db");
//     if (!isUserExist) {
//       return res.json({ success: false, message: "Email is wrong" });
//     }
//     return res.json({ success: true, message: "Login successfull" });

//   } catch (error) {
//     console.log(error, "Error in register api call");
//     return res.json({ success: false, error: error });
//   }
// };
