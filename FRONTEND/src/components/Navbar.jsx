import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SearchBar from "./Search";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="min-[835px]:text-3xl text-2xl" >🚗</span>
            <h1 className="min-[835px]:text-2xl text-xl font-bold text-gray-900">
              Auto<span className="text-red-600">Hub</span>
            </h1>
          </div>
          {/* Search */}
          <div className="relative hidden md:block">
            <SearchBar className="min-[835px]:w-90 w-56"/>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center min-[835px]:gap-6 gap-4 min-[835px]:text-base text-sm">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              Car Listings
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              Contact Us
            </NavLink>
            <Link
              to=""
              className="px-5 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition cursor-pointer"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-6">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              Car Listings
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              Contact Us
            </NavLink>
           
            <Link className="w-full py-2 rounded-full bg-red-600 text-white font-semibold text-center cursor-pointer hover:bg-red-700">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
