import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Details from './Aboutmore'
import TemplePremises from './TemplePremises'

function Home() {
  return (
    <div>
       <HeroSection/>
      <About/>
      <TemplePremises/>
    </div>
  )
}

export default Home