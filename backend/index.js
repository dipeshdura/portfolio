import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import {connectDB} from "./db/db.js";
import contactRoute from "./routes/contact.route.js";
dotenv.config();
const app =express();
const PORT =process.env.PORT || 5000;

//middleware

app.use(express.json());
app.use("/api/",contactRoute);

//serve static files from the React app
const __filename =fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);

//path to dist folder (adjust if needed)
const distPath =path.join(__dirname, "../frontend/dist");


app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${distPath}/index.html`));
});

app.listen(PORT,()=>{
    console.log(`Server Started PORT ON: ${PORT}`),
    connectDB()
    
})