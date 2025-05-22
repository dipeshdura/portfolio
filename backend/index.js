import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./db/db.js";
import contactRoute from "./routes/contact.route.js";
dotenv.config();
const app =express();
const PORT =process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use("/api",contactRoute);

app.use((err,_,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message =err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})



app.listen(PORT,()=>{
    console.log(`Server Started PORT ON: ${PORT}`),
    connectDB()
    
})