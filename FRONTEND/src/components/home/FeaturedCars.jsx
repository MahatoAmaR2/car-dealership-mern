import { useEffect, useState } from "react";

const cars = [
  {
    name: "BMW M4",
    price: "₹85,00,000",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
  },
  {
    name: "Mercedes-Benz GLE",
    price: "₹92,00,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    name: "Audi R8",
    price: "₹2,30,00,000",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9",
  },
];

export default function FeaturedCars() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const car = cars[index];

  return (
    <section className="py-5">

      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-105 object-cover"
          />

          <div className="absolute bottom-0 w-full bg-black/70 text-white p-6">
            <h3 className="text-2xl font-bold">{car.name}</h3>
            <p className="text-lg text-gray-300">{car.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
