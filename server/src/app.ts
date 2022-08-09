import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import initializeApiRoutes from "./api/routes";
import config from "config";
import { v2 as cloudinary } from "cloudinary";

const app = express();
const PORT = process.env.PORT || 8800;
const cloudinaryConfig = config.get("CLOUDINARY");

//@ts-ignore
cloudinary.config(cloudinaryConfig);
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/", initializeApiRoutes());

//@ts-ignore
mongoose.connect(config.get("MONGO.url"), (connection) => {
  console.log("Database error: ", connection);
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
  });
});
