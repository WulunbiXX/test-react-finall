import { useState } from 'react'
import "./style.css"
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';

function App() {
  return <div className='App'>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/about' element={ <About/>} />
      <Route path='/services' element={ <Services/>} />
      <Route path='/contact' element={ <Contact/>} />
      <Route path='/SignUp' element={ <SignUp/>} />
    </Routes>

    {/* <Navbar /> */}
    {/* <Home/> */}
  </div>
}

export default App
