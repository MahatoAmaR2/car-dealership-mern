import FeaturedCars from "./FeaturedCars";

export default function HeroSection() {
  return (
    <section className="bg-black text-white flex items-center justify-center min-h-screen ">
      <div className="max-w-7xl px-4  flex flex-col lg:flex-row items-center justify-between gap-16 ">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left md:pt-0 pt-10">
          <div className="font-bold leading-tight">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
              MODERN
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-red-600">
              CLASSIC
            </p>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
              INCREDIBLE
            </p>
          </div>

          <div className="border-b-4 border-red-600 w-40 sm:w-56 md:w-64 lg:w-[88%] mx-auto lg:mx-0 mt-3"></div>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-md mx-auto lg:mx-0">
            Car is where early adopters and innovation seekers find
            premium automotive experiences.
          </p>

          <button className="mt-8 lg:mt-14 px-6 py-3 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition">
            Browse Cars
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
            <FeaturedCars />
          </div>
        </div>

      </div>
    </section>
  );
}
