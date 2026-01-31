import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SearchBar from "./Search";
import api from "../api/axios";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const shortName = user?.name?.slice(0, 4).toUpperCase();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex h-18 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="min-[835px]:text-3xl text-2xl">🚗</span>
            <h1 className="min-[835px]:text-2xl text-xl font-bold text-gray-900">
              Auto<span className="text-red-600">Hub</span>
            </h1>
          </div>

          <div className="relative hidden md:block">
            <SearchBar className="min-[835px]:w-90 w-56" />
          </div>

          <div className="hidden md:flex items-center min-[835px]:gap-6 gap-4 min-[835px]:text-base text-sm">
            <NavLink
              to="/cars"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              Car Listings
            </NavLink>

            <div
              onClick={() =>
                document
                  .getElementById("contact-us")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-red-600 font-medium cursor-pointer"
            >
              Contact Us
            </div>

            <div
              onClick={() =>
                document
                  .getElementById("about-us")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-700 hover:text-red-600 font-medium cursor-pointer"
            >
              About Us
            </div>

            {!user ? (
              <Link
                to="/login"
                className="px-5 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition"
              >
                Login
              </Link>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <div className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold cursor-pointer">
                  {shortName}
                </div>

                {dropdown && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg overflow-hidden">
                    {user.role === "admin" && (
                      <button
                        onClick={() => navigate("/car-register")}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Car Register
                      </button>
                    )}

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-6">
            <NavLink
              to="/cars"
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

            {!user ? (
              <Link
                to="/login"
                className="w-full py-2 rounded-full bg-red-600 text-white font-semibold text-center hover:bg-red-700"
              >
                Login
              </Link>
            ) : (
              <>
                {user.role === "admin" && (
                  <button
                    onClick={() => navigate("/car-register")}
                    className="w-full py-2 rounded-full bg-gray-100 text-gray-800"
                  >
                    Car Register
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="w-full py-2 rounded-full bg-red-600 text-white font-semibold"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
