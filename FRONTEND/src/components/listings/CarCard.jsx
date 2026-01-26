import { useNavigate } from "react-router-dom";

export default function CarCard({ car }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/cars/${car.id}`)}
      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <img
        src={car.images[1]}
        alt={car.model}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-medium text-black/90">
          {car.make} {car.model}
        </h3>

        <p className="text-black/90">{car.year}</p>

        <p className="text-black/90 font-medium text-lg ">
          ₹{car.price.toLocaleString()}
        </p>

        <button className="mt-4 text-xl font-medium w-full text-red-600 cursor-pointer py-2 rounded-lg border border-red-600 ">
          View Details
        </button>
      </div>
    </div>
  );
}
