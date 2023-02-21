import React from 'react';
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";



export default function BookingPage(props) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    navigate("/confirmation")
  }

  return (
    <div className='booking-page'>
      <BookingForm 
        formData={props.formData} 
        setFormData={props.setFormData}
        times={props.times}
        setTimes={props.setTimes}
        handleSubmit={handleSubmit}
      />
    </div>
   
  )
}
