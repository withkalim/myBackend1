export const Register = (req, res) =>{
    try {
        const { name, email, password, conformPassword } = req.body
        console.log(name, email, password, conformPassword);
        
        if (!name || !email || !password || !conformPassword) {
          return res.send("All field medotery");
        }
        if (password !== conformPassword) {
          return res.send("Please enter right password");
        }
        return res.send("Horrey Register Successfull");
      } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
      }
}

// for login
export const Login = (req, res)=>{
    try {
        return res.send("Login successfull");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");  
    }
}