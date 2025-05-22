import Contact from "../models/contact.model.js";
import { asyncHandler, errorHandler } from "../utils/error.js";

export const contactForm =asyncHandler(async(req,res,next)=>{
   
    const {name,email,subject,message} =req.body;
    if(!name || !email || !subject || !message){
        return next(errorHandler(400,"Invalid Credentials"));
    }
    const contact =new Contact({
        name,
        email,
        subject,
        message
    })
    await contact.save();
    return res.status(201).json({"message":"Form submitted Successfully 🤝",contact})
   
    
}
)
export const allContact =asyncHandler(async(req,res)=>{
        const contactForm =await Contact.find({});
        return res.status(200).json({"users":contactForm});
})