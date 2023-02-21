import React from "react"
import Hero from "./Hero"
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import About from "./About"
import Footer from './Footer';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking'
import {HashRouter, Routes, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default function Main() {

  const [formData, setFormData] = React.useState(
      {firstName: "", 
      lastName: "", 
      email: "",
      guests: "",
      resDate: "",
      resTime: "",
      occasion: "",
    }
  )

  console.log(formData)


  const [times, setTimes] = React.useState({})

  function updateTimes() {
    setTimes(prevTimes => {
      return {...prevTimes, [formData.resTime]: false}
    })
  }

  function randomBool() {
    return Math.random() > 0.5 ? true : false;
  }

  function initializeTimes() {
    setTimes({
      "17:00": randomBool(),
      "17:30": randomBool(),
      "18:00": randomBool(),
      "18:30": randomBool(),
      "19:00": randomBool(),
      "19:30": randomBool(),
      "20:00": randomBool(),
      "20:30": randomBool(),
      "21:00": randomBool(),
      "21:30": randomBool(),
      "22:00": randomBool(),
      "22:30": randomBool(),
    })
  }

  function clearFormData() {
    setFormData({
      firstName: "", 
      lastName: "", 
      email: "",
      guests: "",
      resDate: "",
      resTime: "",
      occasion: "",
    })
  }

  React.useEffect(() => {
    initializeTimes()
  }, [formData.resDate])

  React.useEffect(() => {
    updateTimes()
  }, [formData.resTime])


  return (
    <>
     <HashRouter>
        <header>
          <img src="/littlelemon-vert.png" alt="Little Lemon Logo"></img>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#menu">Menu</Link></li>
              <li><Link to="/booking" onClick={clearFormData}>Reservations</Link></li>
              <li><Link to="/#order-online">Order Online</Link></li>
              <li><Link to="#login">Login</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={ 
          <main>
            <Hero clearFormData={clearFormData} />
            <hr />
            <Specials />
            <hr />
            <Testimonials />
            <hr />
            <About />
            <hr />
          </main>} />
          <Route path="/booking" element={
            <BookingPage 
              formData={formData} 
              setFormData={setFormData} 
              times={times}
              setTimes={setTimes}
            />}   
          />
          <Route path="/confirmation" element={<ConfirmedBooking formData={formData} />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  )
}