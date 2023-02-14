import React from 'react'

export default function BookingForm(props) {
    

  
  function handleChange(event) {
      props.setFormData(prevFormData => {
          return {
              ...prevFormData,
              [event.target.name]: event.target.value
          }
      })
  }

  function handleSubmit(event) {
    event.preventDefault()
    submitToApi(props.formData) // Function to submit data to API
  }
  
  function submitToApi() {
    alert('Reseveration request has been submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={props.formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={props.formData.lastName}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={props.formData.email}
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
      />
       <input
        type="date"
        onChange={handleChange}
        name="resDate"
        value={props.formData.resDate}
      />
      <select 
        id="resTime"
        value={props.formData.resTime}
        onChange={handleChange}
        name="resTime"
      >
        <option value="">-- Choose Time --</option>
        <option value="17:00">17:00</option>
        <option value="17:30">17:30</option>
        <option value="18:00">18:00</option>
        <option value="18:30">18:30</option>
        <option value="19:00">19:00</option>
        <option value="19:30">19:30</option>
        <option value="20:00">20:00</option>
        <option value="20:30">20:30</option>
        <option value="21:00">21:00</option>
        <option value="21:30">21:30</option>
      </select>
      <fieldset>
        <legend>Special Occasion</legend>
        <input 
          type="radio"
          id="none"
          name="occasion"
          value="none"
          checked={props.formData.occasion === "none"}
          onChange={handleChange}
        />
        <label htmlFor="none">None</label> 
        <input 
          type="radio"
          id="birthday"
          name="occasion"
          value="birthday"
          checked={props.formData.occasion === "birthday"}
          onChange={handleChange}
        />
        <label htmlFor="birthday">Birthday</label>  
        <input 
          type="radio"
          id="anniversary"
          name="occasion"
          value="anniversary"
          checked={props.formData.occasion === "anniversary"}
          onChange={handleChange}
        />
        <label htmlFor="anniversary">Anniversary</label>  
      </fieldset>

      <button>Submit</button>
    </form>
  )
}

