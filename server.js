import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/jobs", jobRoutes);

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB 🥭"))
  .catch((error) => console.log("MongoDB connection error: ", error));

// server listener
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
