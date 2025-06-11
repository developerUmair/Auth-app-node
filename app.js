// app.js
import cookieParser from "cookie-parser";
import express from "express";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";

// Setup Express
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);

export default app;
