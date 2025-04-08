import User from "../model/user.schema.js";

export const Register = async (req, res) =>{
    try {
        const { name, email, password, conformPassword } = req.body.userData;
        console.log(name, email, password, conformPassword);
        
        if (!name || !email || !password || !conformPassword) {
          return res.json({success: false, message: "All field mandatory"});
        }
        if (password !== conformPassword) {
          return res.json({success: false, message: "Please enter correct password"});
        }
        const isEmailExist = await User.find({ email: email});
        // const isEmailExist = await User.deleteOne({ email: email});

        console.log(isEmailExist, "is email exist");
        if(isEmailExist?.length > 0){
          return res.json({success: false, message:  "Email already taken, please use another one"});
        }

        // mongoDB save data 
       const newUser = User({
        name,
        email,
        password
       });

       const responsefromDB = await newUser.save();
       console.log(newUser, "recent newUSer");

        return res.json({success: true, message:  "Horrey Register Successfull"});
      } catch (error) {
        console.error(error);
        res.json({success: false, message:  "Server Error"});
      }
}

// for login
export const Login = (req, res)=>{
    try {
        return res.send("Login successfull");
    } catch (error) {
        console.error(error);
        res.status(500).json("Server Error");  
    }
}