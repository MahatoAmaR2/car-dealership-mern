export default function About() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10">
          About <span className="text-red-600">Us</span>
        </h1>

        <div className="max-w-3xl mx-auto text-center text-gray-300 mb-14">
          <p>
            Welcome to <span className="font-semibold text-white">AutoHub</span>
            , your trusted destination for premium and reliable cars. We are
            committed to delivering quality vehicles with transparency,
            affordability, and exceptional customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-400 text-sm">
              To simplify the car buying experience by offering verified cars,
              honest pricing, and a seamless digital platform for customers.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-400 text-sm">
              To become India’s most trusted online car dealership by combining
              technology, innovation, and customer-first values.
            </p>
          </div>

          <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
            <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>✔ Verified & quality-checked cars</li>
              <li>✔ Transparent pricing</li>
              <li>✔ Easy search & filters</li>
              <li>✔ Dedicated customer support</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>
            At <span className="font-semibold text-white">AutoHub</span>, we
            don’t just sell cars — we help you find the perfect drive.
          </p>
        </div>
      </div>
    </div>
  );
}
