import React from 'react'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDailyPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [allPosts, setAllPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Fetch all posts
  const fetchAllPosts = async () => {
    try {
      const response = await fetch("http://localhost:8081/post/getAllPosts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setAllPosts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // Add a new post
  const addNewPost = async () => {
    try {
      const formData = new FormData();
      formData.append(
        "post",
        JSON.stringify({
          title: newPost.title,
          description: newPost.content,
        })
      );
      if (newPost.image) {
        formData.append("image", newPost.image);
      }

      const response = await fetch("http://localhost:8081/post/add", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to add the post");
      }

      const result = await response.json();
      setSuccessMessage(`Post added successfully! Post ID: ${result.postId}`);
      setNewPost({ title: "", content: "", image: null });
      setIsModalOpen(false);
      fetchAllPosts();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  // Navigate to details page
  const handleViewDetails = (post) => {
    navigate(`/adminpost/${post.id}`, { state: { post } });
  };

  return (
    <div className="relative max-w-6xl mx-auto p-6 bg-white shadow-md rounded-md ">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Post Manager</h1>

      {/* "Add Post" Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-4 right-4 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
      >
        + Add Post
      </button>

      {/* Display All Posts */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">All Posts</h2>
        {allPosts.length === 0 ? (
          <p className="text-gray-500">No posts available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-md shadow-md bg-gray-50 cursor-pointer"
                onClick={() => handleViewDetails(post)}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.description}</p>
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt="Post"
                    className="w-full h-40 object-cover rounded-md"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-md shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Post</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Post Title"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              />
              <textarea
                placeholder="Post Description"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                rows="4"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                onChange={(e) => setNewPost({ ...newPost, image: e.target.files[0] })}
              />
              <button
                onClick={addNewPost}
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

export default AdminDailyPost;
