import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center">
          We’d love to hear from you! Feel free to reach out to us using the form below or check out the graph on the right.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 text-center text-gray-600">
              <p>Email: <a href="mailto:support@nathsheb.com" className="text-blue-600">support@nathsheb.com</a></p>
              <p>Phone: <a href="tel:+11234567890" className="text-blue-600">+1 (123) 456-7890</a></p>
              <p>Address: Ninam Post Padali, District Satara, Maharashtra, India</p>
            </div>
          </div>

          {/* Right Column: Graph */}
          <div>
           

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Our Location</h3>
              <iframe
                className="w-full h-64 rounded-lg border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.6829439387974!2d74.03858291490194!3d17.4967162048256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc230b89703d7b9%3A0x6c5b246fbc99a5c7!2sNinam%2C%20Maharashtra%20415211!5e0!3m2!1sen!2sin!4v1673897693453!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-blue-600 hover:underline">Facebook</a>
          <a href="#" className="text-blue-600 hover:underline">Twitter</a>
          <a href="#" className="text-blue-600 hover:underline">Instagram</a>
        </div>
        
          </div>
        </div>

        {/* Social Media Links */}
      
      </div>
    </div>
  );
};

export default ContactUs;
