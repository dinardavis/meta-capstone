import React from 'react';
import BookingForm from "./BookingForm";

export default function BookingPage(props) {
  return (
    <div className='booking-page'>
      <BookingForm formData={props.formData} setFormData={props.setFormData}/>
    </div>
   
  )
}
