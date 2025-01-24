import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/details"); // Replace '/details' with your target route.
  };

  return (
    <section className="bg-zinc-100 text-gray-800 px-6 py-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-orange-500 mb-6">
          About Shri Kshetra Ninama Temple
        </h2>
      </div>

      {/* About Details Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1695546423823-3e78ec2ff41e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anlvdGliYXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Temple"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">
            A Rich Spiritual Legacy
          </h3>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            Shri Kshetra Ninama is a divine spiritual center located in the serene
            landscapes of [Location]. This temple is a beacon of peace,
            spirituality, and heritage, bringing together devotees from all
            around the world to seek blessings and experience tranquility.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Established in [Year], Shri Kshetra Ninama is renowned for its
            intricate architecture, vibrant festivals, and age-old traditions.
            The temple serves as a sanctuary where devotees can immerse
            themselves in spiritual practices such as meditation, prayer, and
            community events.
          </p>

          <button
            onClick={handleReadMoreClick}
            className="px-6 py-2 bg-orange-500 text-white font-medium text-lg rounded shadow hover:bg-orange-600 transition"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Call-to-Action
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Plan Your Visit
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Come and experience the spiritual bliss of Shri Kshetra Ninama. We
          welcome you with open arms to be a part of our divine journey.
        </p>
        <a
          href="/visit"
          className="inline-block px-6 py-3 bg-orange-500 text-white font-medium text-lg rounded shadow hover:bg-orange-600 transition"
        >
          Learn More
        </a>
      </div> */}
    </section>
  );
};

export default About;
