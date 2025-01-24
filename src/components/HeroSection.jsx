 import React from "react";
import { Link } from "react-router-dom";
// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="https://cdn.pixabay.com/video/2016/09/21/5353-183788401_tiny.mp4" // Replace with your video file path
//         autoPlay
//         loop
//         muted
//       ></video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           Welcome to <span className="text-orange-500">Shree Kshetra Ninam</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200 mb-6">
//           Experience the serenity and beauty of our spiritual abode.
//         </p>
//         <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
//           Explore Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/sasankathi2.mp4" // Absolute path from public folder
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to <span className="text-orange-500">Shree Kshetra Ninam</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Experience the serenity and beauty of our spiritual abode.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
        <Link
          to="/about">
            Explore now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
