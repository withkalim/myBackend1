import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    role : {type : String , required : true , default : "user"},
    password: {type: String, required: true},
    phone: {type: Number, default: 9876543310},
});

const User = model("User", userSchema);

export default User; 