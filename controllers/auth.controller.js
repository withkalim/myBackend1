import User from "../model/user.schema.js";
import bcrypt from "bcrypt";

export const Register = async (req, res) => {
  try {
    console.log("Received data: ", req.body);
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.json({ success: false, message: "All fields are mandatory" });
    }

    if (password !== confirmPassword) {
      return res.json({ success: false, message: "Passwords do not match" });
    }

    const isEmailExist = await User.find({ email });

    if (isEmailExist?.length > 0) {
      return res.json({
        success: false,
        message: "Email already taken, please use another one",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    return res.json({
      success: true,
      message: "Hooray! Registration successful",
    });
  } catch (error) {
    console.error("Registration error", error);
    res.json({ success: false, message: "Server Error" });
  }
};

// export const Register = async (req, res) => {
//   try {
//     console.log("Received data: ", req.body);
//     const { name, email, password, confirmPassword } = req.body.userData.name;
//     console.log(name, email, password, confirmPassword);

//     if (!name || !email || !password || !confirmPassword) {
//       return res.json({ success: false, message: "All field mandatory" });
//     }
//     if (password !== confirmPassword) {
//       return res.json({
//         success: false,
//         message: "Password not matched",
//       });
//     }
//     const isEmailExist = await User.find({ email: email });
//     // const isEmailExist = await User.deleteOne({ email: email});

//     console.log(isEmailExist, "isemailexist");
//     if (isEmailExist?.length > 0) {
//       return res.json({
//         success: false,
//         message: "Email already taken, please use another one",
//       });
//     }

//     const hashPassword = await bcrypt.hash(password, 10);
//     console.log(password, "password", hashPassword, "New Hashpassword");

//     // save data to mongoDB
//     const newUser = await User({
//       name: name,
//       email: email,
//       password: hashPassword,
//     });

//     const responsefromDB = await newUser.save();
//     console.log(newUser, "recent newUSer");

//     return res.json({ success: true, message: "Horrey Register Successfull" });
//   } catch (error) {
//     console.error("Registration error", error);
//     res.json({ success: false, message: "Server Error" });
//   }
// };

// for login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, message: "All field are mandatory" });
    }
    const isUserExist = await User.findOne({ email});
    console.log(isUserExist, "Check user exist in db");
    if (!isUserExist) {
      return res.json({ success: false, message: "Email is wrong" });
    }
    console.log(
      password,
      "req.body.password",
      isUserExist.password,
      "isUserExist.password"
    );
    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserExist.password
    );
    console.log(isPasswordCorrect, "isPasswordCorrect");
    if (!isPasswordCorrect) {
      return res.json({ success: false, message: "Password is wrong" });
    }

    return res.json({ success: true, message: "Login successfull" });
  } catch (error) {
    console.error(error, "Error in register api call");
    return res.json({ success: false, error: "Server error" });
  }
};
