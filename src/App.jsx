import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AboutUs from './Components/About/AboutUs'
import Contact from './Components/Contact/Contact'
import Villas from './Components/Villa/Villas'
import SingleVillas from './Components/Villa/SignleVilla'
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/villas' element={<Villas />} />
          <Route path='/villa/:id' element={<SingleVillas />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/termsandconditions' element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App