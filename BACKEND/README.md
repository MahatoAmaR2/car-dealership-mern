# Car Dealership Backend API

This repository contains the backend implementation for the **Car Dealership Website**.  
It provides secure authentication, role-based authorization, and REST APIs for managing car listings with image uploads.

---

## 🔧 Tech Stack
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- Multer & Cloudinary (Image Upload)

---

## 🔐 Authentication
- User Registration
- User Login / Logout
- JWT-based authentication
- Role-based access (Admin/User)

---

## 🚗 Car APIs
| Method | Endpoint | Description | Access |
|------|---------|-------------|--------|
| GET | `/api/cars` | Get all cars (pagination, filters) | Public |
| GET | `/api/cars/:id` | Get car by ID | Public |
| POST | `/api/cars/car_register` | Create new car | Admin |
| DELETE | `/api/cars/:id` | Delete car | Admin |

---

## 📦 Features
- Car listing with make, model, year, price, VIN, mileage, and images
- Server-side pagination and price filtering
- Admin-only car management
- Multiple image upload using Cloudinary
- Secure APIs tested via Postman

---

## ⚙️ Environment Variables
Create a `.env` file with the following:

```env
PORT=3002
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
