import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarListings from "./pages/CarListings";
import CarDetails from "./pages/CarDetails"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarListings />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
