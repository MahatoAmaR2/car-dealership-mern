import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Toast from "../components/Toast";

export default function CarRegister() {
  const navigate = useNavigate();

  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    vin: "",
    mileage: "",
    price: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      images: Array.from(e.target.files),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("make", formData.make);
      data.append("model", formData.model);
      data.append("year", formData.year);
      data.append("vin", formData.vin);
      data.append("mileage", formData.mileage);
      data.append("price", formData.price);

      formData.images.forEach((img) => {
        data.append("images", img);
      });

      // ✅ backend call
      await api.post("/cars/car_register", data);

      setToast({
        message: "Car registered successfully!",
        type: "success",
      });

      setTimeout(() => navigate("/cars"), 1500);
    } catch (error) {
      setToast({
        message:
          error.response?.data?.message || "Car registration failed",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="min-h-screen bg-black text-white py-16 px-4">
        <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-xl border border-neutral-800">
          <h1 className="text-2xl font-bold text-center mb-8">
            Register <span className="text-red-600">Car</span>
          </h1>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              name="make"
              placeholder="Car Make"
              onChange={handleChange}
              required
              className="input-dark"
            />

            <input
              name="model"
              placeholder="Car Model"
              onChange={handleChange}
              required
              className="input-dark"
            />

            <input
              type="number"
              name="year"
              placeholder="Year"
              onChange={handleChange}
              required
              className="input-dark"
            />

            <input
              name="vin"
              placeholder="VIN Number"
              onChange={handleChange}
              required
              className="input-dark"
            />

            <input
              type="number"
              name="mileage"
              placeholder="Mileage (km/l)"
              onChange={handleChange}
              required
              className="input-dark"
            />

            <input
              type="number"
              name="price"
              placeholder="Price (₹)"
              onChange={handleChange}
              required
              className="input-dark"
            />

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="text-sm"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-red-600 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50"
            >
              {loading ? "Registering..." : "Register Car"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
