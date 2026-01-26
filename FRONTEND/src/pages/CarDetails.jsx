import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { carsData } from "../data";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = carsData.find((c) => c.id === Number(id));

  const [activeImage, setActiveImage] = useState(car?.images[0]);

  if (!car) {
    return <p className="text-center mt-10">Car not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-600 hover:underline"
      >
        ← Back to listings
      </button>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <img
            src={activeImage}
            alt={car.model}
            className="w-full h-80 object-cover rounded-xl border"
          />

          <div className="flex gap-4 mt-4">
            {car.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setActiveImage(img)}
                className={`h-20 w-28 object-cover rounded-lg cursor-pointer border-2
                  ${
                    activeImage === img
                      ? "border-red-600"
                      : "border-transparent"
                  }`}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            {car.make} {car.model}
          </h1>

          <p className="text-gray-600 mt-2">
            {car.year} • {car.mileage} km/l
          </p>

          <p className="text-red-600 text-2xl font-semibold mt-4">
            ₹{car.price.toLocaleString()}
          </p>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Specifications</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {Object.entries(car.specs).map(([key, value]) => (
                <li key={key}>
                  <strong className="capitalize">{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              {car.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-gray-100 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Contact for Inquiry</h3>
            <p>📞 {car.contact.phone}</p>
            <p>✉ {car.contact.email}</p>

            <button className="mt-4 w-full border border-red-600 text-red-600 font-medium text-xl py-2 rounded-lg cursor-pointer">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
