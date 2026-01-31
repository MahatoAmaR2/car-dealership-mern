import { useEffect, useState } from "react";
import FilterSidebar from "../components/listings/Filters.jsx";
import CarGrid from "../components/listings/CarGrid";
import api from "../api/axios";
import { carsData as dummyCars } from "../data.js";

export default function CarListings({ limit }) {
  const [showFilters, setShowFilters] = useState(false);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    year: "",
    priceRange: "",
    makes: [],
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await api.get("/cars");

        const mergedCars = [...(res.data || []), ...dummyCars];

        setCars(mergedCars);
      } catch (error) {
        console.warn("DB not available, using dummy data");
        setCars(dummyCars);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.make.toLowerCase().includes(filters.search.toLowerCase()) ||
      car.model.toLowerCase().includes(filters.search.toLowerCase());

    const matchesYear = !filters.year || car.year === Number(filters.year);

    const matchesBrand =
      filters.makes.length === 0 || filters.makes.includes(car.make);

    let matchesPrice = true;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      matchesPrice = car.price >= min && car.price <= max;
    }

    return matchesSearch && matchesYear && matchesBrand && matchesPrice;
  });

  const carsToShow = limit ? filteredCars.slice(0, limit) : filteredCars;

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading cars...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center gap-2 border px-4 py-2 rounded-lg"
        >
          ☰ Filters
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="hidden lg:block w-64">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Car Grid */}
        <div className="flex-1">
          <CarGrid cars={carsToShow} />
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFilters(false)}
          />

          <div className="absolute left-0 top-0 h-full w-72 bg-white p-4 overflow-y-auto">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              onClose={() => setShowFilters(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
