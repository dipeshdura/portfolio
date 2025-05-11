import Contact from "../models/contact.model.js";

export const contactForm =async(req,res)=>{
    try {
        const {name,email,subject,message} =req.body;
    if(!name || !email || !subject || !message){
        return res.status(400).json({"message":"Empty fileds"})
    }
    const contact =new Contact({
        name,
        email,
        subject,
        message
    })
    await contact.save();
    return res.status(201).json({"message":"Form submitted Successfully 🤝",contact})
    } catch (error) {
        return res.status(500).json({"message":"Internal Server Error",error});
    }
    
}

export const allContact =async(req,res)=>{
    try {
        const contactForm =await Contact.find({});
        return res.status(200).json({"users":contactForm});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error",error:error.message});
    }
}