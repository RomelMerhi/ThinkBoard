import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
// const express = require("express");
// if package.json has type:"module"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({origin: "http://localhost:5173",}));
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

//Connect to database if success then start listening 
connectDB().then(() => 
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})); 