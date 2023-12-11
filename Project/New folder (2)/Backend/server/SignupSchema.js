import mongoose, { Schema } from "mongoose";

const userDetails = new Schema({
    "Name":String,
    "Email":String,
    "Password":String
})
export const Signup =mongoose.model("SignUpDetails",userDetails);