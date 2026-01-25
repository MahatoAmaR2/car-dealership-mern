import CarCard from "./CarCard";

export default function CarGrid({ cars }) {
  if (cars.length === 0) {
    return <p className="text-gray-500">No cars found.</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
