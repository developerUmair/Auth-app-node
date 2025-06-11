import app from "./app.js";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/database.js";

const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
};

startServer();
