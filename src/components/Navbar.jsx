// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State for mobile menu

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-zinc-100 px-5 py-4 font-roboto text-black gap-10">
//       <div className="flex justify-between items-center h-20">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-zinc-600">
//           <div className="flex gap-5 items-center">
//             <span className="text-orange-500">श्री क्षेत्र</span> निनाम
//             {/* <div className="h-5 mt-0">
//               <img
//                 src=""
//                 alt="Logo"
//                 className="h-20 w-20"
//               />
//             </div> */}
//           </div>
//         </Link>

//         {/* Hamburger Icon */}
//         <button
//           onClick={toggleMenu}
//           className="text-2xl md:hidden focus:outline-none"
//         >
//           <div className={`space-y-1 ${isOpen ? "transform rotate-45" : ""}`}>
//             <span className="block w-8 h-1 bg-black"></span>
//             <span className="block w-8 h-1 bg-black"></span>
//             <span className="block w-8 h-1 bg-black"></span>
//           </div>
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-5">
//           <li>
//             <Link to="/" className="hover:text-orange-500 font-bold">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-orange-500 font-bold">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-orange-500 font-bold">
//               Contact
//             </Link>
//           </li>
//           <li>
//           <Link to="/contact" className="block hover:text-orange-500">
//             Yatra comitee
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="block hover:text-orange-500">
//             news
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="block hover:text-orange-500">
//             upcomming events
//           </Link>
//         </li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       <ul
//         className={`md:hidden flex flex-col gap-3 mt-4 transition-all duration-300 ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <li>
//           <Link to="/" className="block hover:text-orange-500">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="block hover:text-orange-500">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/services" className="block hover:text-orange-500">
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="block hover:text-orange-500">
//             Contact
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="block hover:text-orange-500">
//             Yatra comitee
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="block hover:text-orange-500">
//             news
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="block hover:text-orange-500">
//             upcomming events
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-100 px-5 py-4 font-roboto text-black relative">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-zinc-600">
          <div className="flex gap-5 items-center">
            <span className="text-orange-500">श्री क्षेत्र</span> निनाम
          </div>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-black"></span>
            <span className="block w-8 h-1 bg-black"></span>
            <span className="block w-8 h-1 bg-black"></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5">
          <li>
            <Link to="/" className="hover:text-orange-500 font-bold">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button
              className="hover:text-orange-500 font-bold flex items-center"
              onClick={toggleDropdown}
            >
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 py-2 z-50"
              >
                <li>
                  <Link
                    to="/details"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/festivals"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  >
                    About Yatra comitee
                  </Link>
                </li>
                <li>
                  <Link
                    to="/adminevent"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  >
                    AdminEvent
                  </Link>
                </li>
              </ul>
            )}
          </li>
       
          <li>
            <Link to="/post" className="hover:text-orange-500 font-bold">
              Daily Darshan
            </Link>
          </li>
          <li>
            <Link to="/adminpost" className="hover:text-orange-500 font-bold">
           Admin Post
            </Link>
          </li>
          <li>
            <Link to="/annual" className="hover:text-orange-500 font-bold">
              Upcoming Events
            </Link>
          </li>
          <li>
            <Link to="/adminevent" className="hover:text-orange-500 font-bold">
             Admin Events
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500 font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col gap-3 mt-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link to="/" className="block hover:text-orange-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="block hover:text-orange-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="block hover:text-orange-500">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block hover:text-orange-500">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/yatra-committee" className="block hover:text-orange-500">
            Yatra Committee
          </Link>
        </li>
        <li>
          <Link to="/news" className="block hover:text-orange-500">
            News
          </Link>
        </li>
        <li>
          <Link to="/events" className="block hover:text-orange-500">
            Upcoming Events
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
