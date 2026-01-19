import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/page_components/home'
import About from './components/page_components/about'
import Events from './components/page_components/events'
import Navbar from './components/Ui_components/navigation'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/events" element={<Events/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App