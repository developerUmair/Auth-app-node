import cookieParser from "cookie-parser";
import express from "express";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/database.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use("/api/v1/auth", authRouter);

app.listen(PORT, async() => {
    console.log(`Movie Auth-App API is running on http://localhost:${PORT}`)

    await connectToDatabase()
})


export default app;