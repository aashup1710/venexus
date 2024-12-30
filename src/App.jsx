import React from 'react'
import Header from './pages/Header'
import AboutUs from './pages/AboutUs'
import Team from './pages/Team'
import Releases from './pages/Releases'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Mission from './pages/Mission'
import InvestmentPhilosophy from './pages/InvestmentPhilosophy'
import ChooseUs from './pages/ChooseUs'
import WhatWedo from './pages/WhatWedo'
import Hero from './pages/Hero'
import './App.css'


const App = () => {
  return (
    <div className='App w-screen' >
      <Header></Header>
      <Hero />
      <AboutUs></AboutUs>
      <Mission />

      <ChooseUs />
      <WhatWedo />
      <Team></Team>
      <Releases></Releases>
      <Contact></Contact>
      <Footer></Footer>
    </div>
    
  )
}

export default App