import express from "express";
import CookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { connectDb } from "./config/db.config";
import { authRouter } from "./routes/auth.router";
import { errorHandler } from "./middlewares/errorHandler";
import { workspaceRouter } from "./routes/workspace.router";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());
app.use(CookieParser());

app.use("/api/auth", authRouter);
app.use("/api/workspace", workspaceRouter);

app.use(errorHandler);

app.listen(process.env.PORT as string, () => {
  console.log(`server running at ${process.env.PORT}`);
  connectDb();
});
