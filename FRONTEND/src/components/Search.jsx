import React from "react";
import { Search } from "lucide-react";
const SearchBar = ({ className= " " }) => {
  return (
    <>
      <Search
        className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 text-black font-bold ml-2"
        size={24}
      />
      <input
        type="text"
        placeholder="Search cars..."
        className={`ml-3 pl-10 pr-4 py-2 rounded-2xl border-none outline-none shadow-md h-12 ${className}`}
      />
    </>
  );
};

export default SearchBar;
