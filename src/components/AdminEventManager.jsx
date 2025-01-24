import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminEventManager = () => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [allEvents, setAllEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Fetch all events
  const fetchAllEvents = async () => {
    try {
      const response = await fetch("http://localhost:8081/event/getAllEvents");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setAllEvents(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Add a new event
  const addNewEvent = async () => {
    try {
      const formData = new FormData();
      formData.append(
        "event",
        JSON.stringify({
          title: newEvent.title,
          description: newEvent.description,
        })
      );
      if (newEvent.image) {
        formData.append("image", newEvent.image);
      }

      const response = await fetch("http://localhost:8081/event/add", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to add the event");
      }

      const result = await response.json();
      setSuccessMessage(`Event added successfully! Event ID: ${result.eventId}`);
      setNewEvent({ title: "", description: "", image: null });
      setIsModalOpen(false);
      fetchAllEvents();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  // Navigate to event details page
  const handleViewDetails = (event) => {
    navigate(`/event/${event.id}`, { state: { event } });
  };

  return (
    <div className="relative max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md ">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Upcomming events</h1>

      {/* "Add Event" Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-4 right-4 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
      >
        + Add Event
      </button>

      {/* Display All Events */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">All Events</h2>
        {allEvents.length === 0 ? (
          <p className="text-gray-500">No events available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map((event, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-md shadow-md bg-gray-50 cursor-pointer"
                onClick={() => handleViewDetails(event)}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
               
                
                 {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt="Event"
                    className="w-full h-40 object-cover rounded-md"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-md shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Event</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Event Title"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <textarea
                placeholder="Event Description"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                rows="4"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setNewEvent({ ...newEvent, image: e.target.files[0] })}
              />
              <button
                onClick={addNewEvent}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEventManager;
