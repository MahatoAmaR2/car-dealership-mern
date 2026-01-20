import Car from "../models/Car.model.js";
import mongoose from "mongoose";
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

//------------Get All Cars----------------
export const getAllCars = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      make,
      year,
      minPrice,
      maxPrice,
      search,
    } = req.query;

    const query = {};

    if (make) query.make = make;

    if (year) query.year = Number(year);

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { make: { $regex: search, $options: "i" } },
        { model: { $regex: search, $options: "i" } },
      ];
    }


    const pageNumber = Number(page);
    const pageSize = Number(limit);
    const skip = (pageNumber - 1) * pageSize;

    const cars = await Car.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize);

    const totalCars = await Car.countDocuments(query);

    res.status(200).json({
      success: true,
      totalCars,
      totalPages: Math.ceil(totalCars / pageSize),
      currentPage: pageNumber,
      pageSize,
      data: cars,
    });
  } catch (error) {
    console.error("getAllCars error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching cars",
    });
  }
};

//-------------Get Car by ID--------------
export const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Car ID format",
      });
    }

    const car = await Car.findById(id).lean();

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    console.error("getCarById error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching car",
    });
  }
};

//-------------Delete Car by ID--------------

export const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Car ID format",
      });
    }

    const deletedCar = await Car.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Car deleted successfully",
      data: { id: deletedCar._id },
    });
  } catch (error) {
    console.error("deleteCar error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while deleting car",
    });
  }
};
