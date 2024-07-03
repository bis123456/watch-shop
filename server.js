import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from './routes/catagoryRoutes.js';
import productRoutes from './routes/ProductRoutes.js'
import cors from 'cors';
//configuration 
dotenv.config();

const app=express();
//databse config
connectDB();

//middelwares
app.use(cors()); 
app.use(express.json());
app.use(morgan("dev"));

//route
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes)
//rest api

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to ecommerce app</h1>")
});
//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})