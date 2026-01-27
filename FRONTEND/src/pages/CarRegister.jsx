import { useState } from "react";

export default function CarRegister() {
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

  const handleSubmit = (e) => {
    e.preventDefault();

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

    console.log("Car Register Data:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-xl border border-neutral-800">
        <h1 className="text-2xl font-bold text-center mb-8">
          Register <span className="text-red-600">Car</span>
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <input
            type="text"
            name="make"
            placeholder="Car Make (e.g. BMW)"
            value={formData.make}
            onChange={handleChange}
            required
            className="input-dark"
          />

          <input
            type="text"
            name="model"
            placeholder="Car Model (e.g. M4)"
            value={formData.model}
            onChange={handleChange}
            required
            className="input-dark"
          />

          <input
            type="number"
            name="year"
            placeholder="Manufacturing Year"
            value={formData.year}
            onChange={handleChange}
            required
            className="input-dark"
          />

          <input
            type="text"
            name="vin"
            placeholder="VIN Number"
            value={formData.vin}
            onChange={handleChange}
            required
            className="input-dark"
          />

          <input
            type="number"
            name="mileage"
            placeholder="Mileage (km/l)"
            value={formData.mileage}
            onChange={handleChange}
            required
            className="input-dark"
          />

          <input
            type="number"
            name="price"
            placeholder="Price (₹)"
            value={formData.price}
            onChange={handleChange}
            required
            className="input-dark"
          />

          <div>
            <label className="block mb-2 text-sm">Upload Car Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-red-600 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Register Car
          </button>
        </form>
      </div>
    </div>
  );
}
