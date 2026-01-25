export default function FilterSidebar({ filters, setFilters, onClose }) {
  const makes = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];

  return (
    <aside className="w-full bg-white rounded-xl shadow-md p-5 h-fit">
      
      {onClose && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-600 text-xl font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {!onClose && <h2 className="text-lg font-bold mb-4">Filters</h2>}

      {/* SEARCH */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Search</p>
        <input
          type="text"
          placeholder="Search make or model"
          value={filters.search}
          onChange={(e) =>
            setFilters({ ...filters, search: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* BRAND */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Brand</p>
        {makes.map((make) => (
          <label key={make} className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="checkbox"
              checked={filters.makes.includes(make)}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  makes: e.target.checked
                    ? [...filters.makes, make]
                    : filters.makes.filter((m) => m !== make),
                })
              }
            />
            {make}
          </label>
        ))}
      </div>

      {/* YEAR */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Year</p>
        <select
          value={filters.year}
          onChange={(e) =>
            setFilters({ ...filters, year: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
        >
          <option value="">All Years</option>
          <option value="2025">2024</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2022</option>
          <option value="2020">2022</option>
          <option value="2019">2022</option>
          <option value="2018">2022</option>
        </select>
      </div>

      {/* PRICE */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Price</p>
        {[
          { label: "Below ₹5L", value: "0-500000" },
          { label: "₹5L – ₹10L", value: "500000-1000000" },
          { label: "₹10L – ₹20L", value: "1000000-2000000" },
          { label: "Above ₹20L", value: "2000000-99999999" },
        ].map((p) => (
          <label key={p.value} className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="radio"
              name="price"
              value={p.value}
              checked={filters.priceRange === p.value}
              onChange={(e) =>
                setFilters({ ...filters, priceRange: e.target.value })
              }
            />
            {p.label}
          </label>
        ))}
      </div>

      <button
        onClick={() =>
          setFilters({
            search: "",
            year: "",
            priceRange: "",
            makes: [],
          })
        }
        className="w-full bg-gray-100 py-2 rounded hover:bg-gray-200"
      >
        Clear Filters
      </button>
    </aside>
  );
}
