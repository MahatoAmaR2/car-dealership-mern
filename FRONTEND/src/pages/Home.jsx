import HeroSection from "../components/home/HeroSection.jsx";
import CarListings from "../pages/CarListings.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="car-listings">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-2xl font-medium text-center">
            Available <span className="text-red-600 ">Cars</span>
          </p>
        </div>
        <CarListings />
      </div>
    </>
  );
}
