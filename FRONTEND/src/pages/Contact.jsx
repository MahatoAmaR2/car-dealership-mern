export default function Contact() {
  return (
    <div id="contact-us" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">
          Contact <span className="text-red-600">Us</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-2 outline-none "
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border rounded-lg px-4 py-2 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border rounded-lg px-4 py-2  outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">
              Dealership Information
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                📍 <strong>Address:</strong>
                <br />
                AutoHub Cars, NH-19, Durgapur, West Bengal, India
              </p>

              <p>
                📞 <strong>Phone:</strong>
                <br />
                +91 98765 43210
              </p>

              <p>
                ✉ <strong>Email:</strong>
                <br />
                sales@autohub.com
              </p>

              <p>
                🕒 <strong>Working Hours:</strong>
                <br />
                Mon – Sat: 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
