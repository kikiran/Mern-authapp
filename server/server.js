import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
dotenv.config();

const port = process.env.PORT || 8081;

const app = express();

//middleware
app.use(express.json());
app.use(cors({ credentials: true }));

//API Endpoints
app.get("/", (req, res) => {
  res.send("Welcome to NodeJS");
});
app.use("/api/auth", authRouter);

app.listen(port, () => {
  connectDB();
  console.log(`App Running successfully ${port}`);
});
