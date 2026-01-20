import express from "express";
import {
  createCar,
  deleteCar,
  getAllCars,
  getCarById,
} from "../controllers/car.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/role.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post(
  "/car_register",
  verifyJWT,
  isAdmin,
  upload.array("images", 5),
  createCar,
);
router.get("/", getAllCars);
router.get("/:id", getCarById);
router.delete("/:id", verifyJWT, isAdmin, deleteCar);

export default router;
