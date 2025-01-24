import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Details from './components/Aboutmore'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default App