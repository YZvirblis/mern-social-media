import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import initializeApiRoutes from "./api/routes";

const app = express();
const PORT = process.env.PORT || 8800;
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/", initializeApiRoutes());

//@ts-ignore
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
  });
});
