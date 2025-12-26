import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import HeroSection from './Component/HeroSection/HeroSection'

function App() {
  return (
  <>
  <Navbar />
  <HeroSection />
  </>
  )
}

export default App
