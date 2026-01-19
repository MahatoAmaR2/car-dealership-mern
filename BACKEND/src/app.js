import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// SAMPLE route
app.get("/", (req, res) => {
  res.send("API is running...");
});


import userRouter from "./routes/auth.routes.js";

app.use("/api/auth", userRouter);

export { app };
