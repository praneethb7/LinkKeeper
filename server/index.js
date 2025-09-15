import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import linksRouter from "./routes/linkRoutes.js"



dotenv.config();
const app = express();
const PORT = 8000;

connectDB();

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PATCH", "DELETE"],
}));
app.use(express.json());

app.use("/links", linksRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on https://localhost:${PORT}`);
});
