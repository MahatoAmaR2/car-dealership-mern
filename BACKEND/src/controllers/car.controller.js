import Car from "../models/Car.model.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

//-------------Create a new car--------------
export const createCar = async (req, res) => {
  try {
    const { make, model, year, vin, mileage, price } = req.body;

    if (!make || !model || !year || !vin || !mileage || !price) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingCar = await Car.findOne({ vin });
    if (existingCar) {
      return res.status(409).json({
        message: "Car with this VIN already exists",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "At least one car image is required",
      });
    }

    const uploadPromises = req.files.map((file) =>
      uploadToCloudinary(file.buffer, "cars"),
    );
    const uploadImages = await Promise.all(uploadPromises);
    const imageUrls = uploadImages.map((img) => img.secure_url);

    const car = await Car.create({
      make,
      model,
      year,
      vin,
      mileage,
      price,
      images: imageUrls,
      createdBy: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: "Car created successfully",
      data: car,
    });
  } catch (error) {
    console.error("Create car error:", error);
    return res.status(500).json({
      message: "Server error while creating car",
    });
  }
};
