import dns from "node:dns";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./config/connectDB.js";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3002;

// Connect DB, then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
