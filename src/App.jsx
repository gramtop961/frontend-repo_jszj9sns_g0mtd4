import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import Stats from './components/Stats'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <SocialProof />
        <Stats />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
