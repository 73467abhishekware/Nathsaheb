// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const EventDetails = () => {
//   const location = useLocation();
//   const event = location.state.event;
//   const navigate = useNavigate();

//   const handleDelete = async (id) => {
//     // Call the API to delete the event
//     // Then redirect to the event list page
//     // For example, using `fetch` to call the delete API.
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-20">
//       <button
//         onClick={() => navigate("/admin")}
//         className="text-gray-500 hover:text-gray-700 mb-4"
//       >
//         ← Back to Events
//       </button>
//       <h1 className="text-4xl font-bold mb-6 text-gray-800">{event.title}</h1>
//       {event.imageUrl && (
//         <img
//           src={event.imageUrl}
//           alt={event.title}
//           className="w-full h-60 object-cover rounded-md mb-6"
//         />
//       )}
//       <p className="text-lg text-gray-700 mb-4">{event.description}</p>
//       <button
//         onClick={() => handleDelete(event.id)}
//         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//       >
//         Delete Event
//       </button>
//     </div>
//   );
// };

// export default EventDetails;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";

const EventDetails = () => {
  const location = useLocation();
  const event = location.state.event;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleDelete = async (id) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`http://localhost:8081/event/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setSuccess("Event deleted successfully.");
        navigate("/adminevent");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError("An error occurred while deleting the event.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-white shadow-2xl rounded-xl mt-20 space-y-8">
      <button
        onClick={() => navigate("/adminevent")}
        className="flex items-center text-blue-600 hover:text-blue-800 text-lg mb-6 transition duration-300"
      >
        <FaArrowLeft className="mr-2" /> Back to Events
      </button>

      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">{event.title}</h1>
        <p className="text-sm text-gray-500">Created At: {event.createdAt}</p>
      </div>

      {event.imageUrl && (
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-80 object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
      )}

      <p className="text-lg text-gray-700 leading-relaxed text-center">
        {event.description}
      </p>

      {error && (
        <div className="text-red-600 bg-red-50 border border-red-300 rounded-md p-4 text-center">
          <p className="flex items-center justify-center">
            <span className="mr-2">⚠️</span> {error}
          </p>
        </div>
      )}
      {success && (
        <div className="text-green-600 bg-green-50 border border-green-300 rounded-md p-4 text-center">
          <p className="flex items-center justify-center">
            <span className="mr-2">✅</span> {success}
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={() => handleDelete(event.id)}
          className={`flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-md transition duration-300 ${
            loading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600 shadow-md"
          }`}
          disabled={loading}
        >
          <FaTrashAlt className="mr-2" />
          {loading ? "Deleting..." : "Delete Event"}
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
