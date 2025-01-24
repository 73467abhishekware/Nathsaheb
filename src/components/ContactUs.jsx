// import React from 'react';

// const ContactUs = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h2>
//         <p className="text-gray-600 mb-8 text-center">
//           We’d love to hear from you! Feel free to reach out to us using the form below or check out the graph on the right.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left Column: Contact Form */}
//           <div>
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Your Name</label>
//                 <input
//                   type="text"
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="John Doe"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="you@example.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Message</label>
//                 <textarea
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   rows="5"
//                   placeholder="Your message..."
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Send Message
//               </button>
//             </form>

//             <div className="mt-8 text-center text-gray-600">
//               <p>Email: <a href="mailto:support@nathsheb.com" className="text-blue-600">support@nathsheb.com</a></p>
//               <p>Phone: <a href="tel:+11234567890" className="text-blue-600">+1 (123) 456-7890</a></p>
//               <p>Address: Ninam Post Padali, District Satara, Maharashtra, India</p>
//             </div>
//           </div>

//           {/* Right Column: Graph */}
//           <div>
           

//             <div className="mt-10">
//               <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Our Location</h3>
//               <iframe
//                 className="w-full h-64 rounded-lg border"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.6829439387974!2d74.03858291490194!3d17.4967162048256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc230b89703d7b9%3A0x6c5b246fbc99a5c7!2sNinam%2C%20Maharashtra%20415211!5e0!3m2!1sen!2sin!4v1673897693453!5m2!1sen!2sin"
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>
//             <div className="mt-8 flex justify-center space-x-6">
//           <a href="#" className="text-blue-600 hover:underline">Facebook</a>
//           <a href="#" className="text-blue-600 hover:underline">Twitter</a>
//           <a href="#" className="text-blue-600 hover:underline">Instagram</a>
//         </div>
        
//           </div>
//         </div>

//         {/* Social Media Links */}
      
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(''); // Reset status message before sending

    // Check if all fields are filled out
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('All fields are required.');
      return;
    }

    try {
      // Send the form data to the backend
      const response = await axios.post('http://localhost:8081/contact/contactUs', formData);
      setStatusMessage(response.data); // Show success message from backend
    } catch (error) {
      setStatusMessage('Failed to send your message. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>

        {/* Display status message (success or error) */}
        {statusMessage && (
          <div className="mt-4 text-center text-sm text-gray-700">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
