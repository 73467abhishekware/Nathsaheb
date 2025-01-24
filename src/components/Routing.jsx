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
            
        ] 
    }
]);

export default customRounter;

      