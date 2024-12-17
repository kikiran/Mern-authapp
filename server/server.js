import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const port = process.env.PORT || 8081;

const app = express();

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to NodeJS");
});

app.listen(port, () => {
  connectDB();
  console.log(`App Running successfully ${port}`);
});
 