import User from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
  try {
    // Get token from cookie or Authorization header
    const token =
      req.cookies?.token ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Unauthorized request" });
    }

    // Verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from DB
    const user = await User.findById(decodedToken.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Invalid access token" });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(401).json({ message: "Invalid or expired access token" });
  }
};