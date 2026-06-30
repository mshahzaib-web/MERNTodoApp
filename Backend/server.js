import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";

import taskRoutes from "./routes/taskRoutes.js"

dotenv.config();

connectDB();

const app = express();



// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Routes
app.use("/api", taskRoutes);
// app.use("/api/users", userRoutes);

// Error Handler (Always keep this LAST)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});