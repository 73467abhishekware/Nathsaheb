import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Home from './Home';
import Details from './Aboutmore';
import About from './About';
import DailySchedule from './DailySchedule';
import TempleCommittee from './TempleCommittee';
import NinamTemple from './NinamTemple';
import AnnualPrograms from './AnnualPrograms';
import ContactUs from './ContactUs';
import PostManager from './PostManager';
import PostDetails from './PostDetails';
import AdminDailyPost from './AdminDailyPost';
import AdminPostDetails from './AdminPostDetails';
import AdminEventManager from './AdminEventManager';
import EventDetails from './AdminEventDetails';
import Donation from './Donation';




const customRounter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true, // Default route
                element: <Home />
            },
            {
                path: '/details', // Default route
                element: <Details />
            },
            {
                path: '/about', // Default route
                element: <About />
            },
            {
                path: '/schedule', // Default route
                element: <DailySchedule />
            },
            {
                path: '/comitee', // Default route
                element: <TempleCommittee />
            },
            {
                path: '/temple', // Default route
                element: <NinamTemple />
            },
            {
                path: '/annual', // Default route
                element: <AnnualPrograms />
            },
            {
                path: '/contact', // Default route
                element: <ContactUs />
            },
            {
                path: "/post", 
                element: <PostManager />,
                }, 
                {
                  path: "/post/:id", 
                 element: < PostDetails />,
                 },
                {
                  path: "/adminpost", 
                  element: < AdminDailyPost />,
                 },  
                 {
                  path: "/adminpost/:id", 
                  element: < AdminPostDetails/>,
                 }, 
                 {
                  path: "/adminevent", 
                  element: < AdminEventManager/>,
                 },        
                 {
                    path: "/adminevent", 
                    element: < AdminEventManager/>,
                   }, 
                   {
                    path: "/event/:eventId", 
                    element: < EventDetails/>,
                   },  
                   {
                    path: "/donation", 
                    element: < Donation/>,
                   },             
            
        ] 
    }
]);

export default customRounter;

      