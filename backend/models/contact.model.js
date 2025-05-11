import mongoose from "mongoose";

const contactSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        min:5
    },
    subject:{
        type:String,
        required:true,
        min:5
    },
    message:{
        type:String,
        required:true,
        min:5
    }
});

const Contact =new mongoose.model("Contact",contactSchema);

export default Contact;