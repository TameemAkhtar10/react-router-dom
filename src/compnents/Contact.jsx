import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>

        <form className="space-y-4" onSubmit={(e)=> {
            e.preventDefault ()
            console.log(`submitted`);
            
        }}>
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows="4"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button className="w-full py-3 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
            Send Message ✉️
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
