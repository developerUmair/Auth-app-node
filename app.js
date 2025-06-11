// app.js
import cookieParser from "cookie-parser";
import express from "express";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import connectToDatabase from "./database/database.js";

connectToDatabase();

// Setup Express
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);

app.get('/health', async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.send('✅ MongoDB is connected');
  } catch (err) {
    res.status(500).send('❌ MongoDB is NOT connected');
  }
});


export default app;
