export const productCreate = (req, res)=>{
    try {
        return res.send("Products created");
    } catch (error) {
        console.log(error, "someting error in products controller");
    }
}
