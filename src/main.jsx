// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import './index.css';
import customRounter from "./components/Routing";

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application with the RouterProvider
root.render(
  <React.StrictMode>
    <RouterProvider router={customRounter} />
  </React.StrictMode>
);