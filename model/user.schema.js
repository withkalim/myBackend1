import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: Number, default: 9876543310},
});

const User = model("Users", userSchema);

export default User;