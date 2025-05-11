import express from "express";
import dotenv from "dotenv";

import {connectDB} from "./db/db.js";
import contactRoute from "./routes/contact.route.js";
dotenv.config();
const app =express();
const PORT =process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use("/api",contactRoute);





app.listen(PORT,()=>{
    console.log(`Server Started PORT ON: ${PORT}`),
    connectDB()
    
})