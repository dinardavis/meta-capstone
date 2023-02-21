import React from 'react'
import AvailableTimes from './AvailableTimes'
import { HashLink as Link } from 'react-router-hash-link';

export default function BookingForm(props) {
      
  function handleChange(event) {
      props.setFormData(prevFormData => {
          return {
              ...prevFormData,
              [event.target.name]: event.target.value
          }
      })
  }
  


  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={props.formData.firstName}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={props.formData.lastName}
        required
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={props.formData.email}
        required
      />
      <br />
      <input
        type="number"
        min={1}
        max={10}
        placeholder="Number of Guests"
        onChange={handleChange}
        name="guests"
        value={props.formData.guests}
        required
      />
       <input
        type="date"
        onChange={handleChange}
        name="resDate"
        value={props.formData.resDate}
        required
      />
     
      <AvailableTimes 
        formData={props.formData} 
        handleChange={handleChange}
        times={props.times}
        setTimes={props.setTimes}
      />

      <fieldset>
        <legend>Special Occasion</legend>
        <input 
          type="radio"
          id="none"
          name="occasion"
          value="none"
          checked={props.formData.occasion === "none"}
          onChange={handleChange}
          required
        />
        <label htmlFor="none">None</label> 
        <input 
          type="radio"
          id="birthday"
          name="occasion"
          value="birthday"
          checked={props.formData.occasion === "birthday"}
          onChange={handleChange}
          required
        />
        <label htmlFor="birthday">Birthday</label>  
        <input 
          type="radio"
          id="anniversary"
          name="occasion"
          value="anniversary"
          checked={props.formData.occasion === "anniversary"}
          onChange={handleChange}
          required
        />
        <label htmlFor="anniversary">Anniversary</label>  
      </fieldset>

      <button aria-label="On Click">Submit</button>
   
    </form>
  )
}

