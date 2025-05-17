import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.config";
import { authRouter } from "./routes/auth.router";
import { errorHandler } from "./middlewares/errorHandler";
dotenv.config();

const app = express();

app.use("/api/auth", authRouter);

app.use(errorHandler);

app.listen(process.env.PORT as string, () => {
  console.log(`server running at ${process.env.PORT}`);
  connectDb();
});
