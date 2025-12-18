import { useState } from 'react'
import "./style.css"
import Navbar from './components/navbar'
import { Route, Routes } from "react-router-dom"
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';

function App() {
  return <div className='App'>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/about' element={ <About/>} />
      <Route path='/services' element={ <Services/>} />
      <Route path='/contact' element={ <Contact/>} />
    </Routes>

    {/* <Navbar /> */}
    {/* <Home/> */}
  </div>
}

export default App
