
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiHeart } from "react-icons/hi";

const PostDetails = () => {
  const { id } = useParams(); // Extract post ID from URL
  const location = useLocation();
  const post = location.state?.post; // Get post from state if available
  const [postDetails, setPostDetails] = useState(post);

  // Fetch post details if not passed via state
  useEffect(() => {
    if (!postDetails) {
      fetch(`http://localhost:8081/post/getPostById/${id}`)
        .then((response) => response.json())
        .then((data) => setPostDetails(data))
        .catch((error) => console.error("Error fetching post:", error));
    }
  }, [id, postDetails]);

  if (!postDetails) {
    return <p>Loading...</p>;
  }

  // Function to handle image download
  const handleDownloadImage = () => {
    fetch(postDetails.imageUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        return response.blob(); // Convert response to a Blob
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob); // Create a temporary URL for the Blob
        const link = document.createElement("a");
        link.href = url;
        link.download = postDetails.imageUrl.split("/").pop(); // Extract the filename from the URL
        link.click(); // Trigger the download
        window.URL.revokeObjectURL(url); // Clean up the temporary URL
      })
      .catch((error) => console.error("Error downloading image:", error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden  mt-10">
        {postDetails.imageUrl && (
          <div className="relative">
            <img
              src={postDetails.imageUrl}
              alt={postDetails.title}
              className="w-full h-70 object-cover bg-cover"
            />
            <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              #{postDetails.category || "Uncategorized"}
            </div>
          </div>
        )}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            {postDetails.title}
          </h1>
          <p className="text-gray-600 mb-4">{postDetails.description}</p>
          <div className="flex gap-4">
            <button
              onClick={handleDownloadImage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Download Image
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              Like <HiHeart/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;


// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { HiHeart } from "react-icons/hi";

// const PostDetails = () => {
//   const { id } = useParams(); 
//   const location = useLocation();
//   const navigate = useNavigate(); // Used for navigation after deletion
//   const post = location.state?.post; // Get post from state if available
//   const [postDetails, setPostDetails] = useState(post);
//   console.log("id is",id)
//   // Fetch post details if not passed via state
//   useEffect(() => {
//     if (!postDetails) {
//       fetch(`http://localhost:8081/post/getPostById/${id}`)
//         .then((response) => response.json())
//         .then((data) => setPostDetails(data))
//         .catch((error) => console.error("Error fetching post:", error));
//     }
//   }, [id, postDetails]);

//   if (!postDetails) {
//     return <p>Loading...</p>;
//   }

//   // Function to handle image download
//   const handleDownloadImage = () => {
//     fetch(postDetails.imageUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch image");
//         }
//         return response.blob(); // Convert response to a Blob
//       })
//       .then((blob) => {
//         const url = window.URL.createObjectURL(blob); // Create a temporary URL for the Blob
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = postDetails.imageUrl.split("/").pop(); // Extract the filename from the URL
//         link.click(); // Trigger the download
//         window.URL.revokeObjectURL(url); // Clean up the temporary URL
//       })
//       .catch((error) => console.error("Error downloading image:", error));
//   };

//   // Function to handle post deletion
//   const handleDeletePost = () => {

//     if (window.confirm("Are you sure you want to delete this post?")) {
//       fetch(`http://localhost:8081/post/deletePost/${id}`, {
//         method: "DELETE",
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Failed to delete post");
//           }
//           alert("Post deleted successfully!");
//           navigate("/"); // Redirect to the home or posts list page
//         })
//         .catch((error) => {
//           console.error("Error deleting post:", error);
//           alert("Failed to delete the post.");
//         });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden mt-10">
//         {postDetails.imageUrl && (
//           <div className="relative">
//             <img
//               src={postDetails.imageUrl}
//               alt={postDetails.title}
//               className="w-full h-70 object-cover bg-cover"
//             />
//             <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
//               #{postDetails.category || "Uncategorized"}
//             </div>
//           </div>
//         )}
//         <div className="p-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-3">
//             {postDetails.title}
//           </h1>
//           <p className="text-gray-600 mb-4">{postDetails.description}</p>
//           <div className="flex gap-4">
//             <button
//               onClick={handleDownloadImage}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//             >
//               Download Image
//             </button>
//             <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
//               Like <HiHeart />
//             </button>
//             <button
//               onClick={handleDeletePost}
//               className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//             >
//               Delete Post
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetails;
