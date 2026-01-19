import express from "express";
import { createCar } from "../controllers/car.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/role.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/car_register", verifyJWT, isAdmin, upload.array("images", 5), createCar);

export default router;
