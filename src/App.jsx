import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Bollyood from './components/Bollyood'
import Home from './components/Home'
import Hollywood from './components/Hollywood'
import Technology from './components/Technology'
import Fitness from './components/Fitness'
import Food from './components/Food'
import './App.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bollywood" element={<Bollyood/>}/>
        <Route path="/hollywood" element={<Hollywood/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/fitness" element={<Fitness/>}/>
        <Route path="/food" element={<Food/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
