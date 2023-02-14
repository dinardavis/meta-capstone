import React from 'react';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";

function App() {
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

  return (
    <Router>
      <header>
        <img src="/littlelemon-vert.png" alt="Little Lemon Logo"></img>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><Link to="#menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="#order-online">Order Online</Link></li>
            <li><Link to="#login">Login</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage formData={formData} setFormData={setFormData} />} />
      </Routes>
  
      <Footer />
    </Router>
  );
}

export default App;
