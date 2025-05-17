import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.config";
dotenv.config();

const app = express();

app.listen(process.env.PORT as string, () => {
  console.log(`server running at ${process.env.PORT}`);
  connectDb();
});
