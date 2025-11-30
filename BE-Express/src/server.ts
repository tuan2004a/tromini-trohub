import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

import { connectDB } from './config/db';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware bắt buộc
app.use(cors());
app.use(express.json());

//⚡ Route
app.use("/api", routes);

// ❗ MIDDLEWARE XỬ LÝ LỖI
app.use(errorHandler);

// DB + Server
connectDB().then(()=>{
    app.listen(PORT, () =>{
        console.log(`server bắt đầu trên cổng ${PORT}`);
    })
})