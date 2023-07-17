import mongoose from 'mongoose'; 
import cors from 'cors'; 
import express from 'express'; 
import bodyParser from 'body-parser'; 
import dotenv from "dotenv"; 
import authRoutes from "./routes/auth.js"; 
import applicationRoutes from "./routes/application.js";
import adminRoutes from "./routes/admin.js"; 
import {checkAdmin}  from './middleware/auth.js';
const app = express(); 

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors()); 
dotenv.config();

app.use("/auth",authRoutes);
app.use("/application",applicationRoutes);
app.use("/admin",checkAdmin ,adminRoutes);  
const MONGO_URL ="mongodb+srv://ngo123suhas:ngo123suhas@cluster0.2u3tks7.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000;

mongoose.connect(MONGO_URL,{
  useNewUrlParser:true, 
  useUnifiedTopology:true,
}).then(()=>app.listen(PORT,()=>console.log(`Server running on port :${PORT}`)))
  .catch((error)=>console.log(error.message));

 