import { useState } from "react";
import FilterSidebar from "../components/listings/Filters.jsx";
import CarGrid from "../components/listings/CarGrid";
import { carsData } from "../data.js"

export default function CarListings() {
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    year: "",
    priceRange: "",
    makes: [],
  });

  const filteredCars = carsData.filter((car) => {
    const matchesSearch =
      car.make.toLowerCase().includes(filters.search.toLowerCase()) ||
      car.model.toLowerCase().includes(filters.search.toLowerCase());

    const matchesYear =
      !filters.year || car.year === Number(filters.year);

    const matchesBrand =
      filters.makes.length === 0 || filters.makes.includes(car.make);

    let matchesPrice = true;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      matchesPrice = car.price >= min && car.price <= max;
    }

    return matchesSearch && matchesYear && matchesBrand && matchesPrice;
  });

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
        
       
        <div className="hidden lg:block w-64">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        
        <div className="flex-1">
          <CarGrid cars={filteredCars} />
        </div>
      </div>

     
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFilters(false)}
          ></div>

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
