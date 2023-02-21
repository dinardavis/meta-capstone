
export default function ConfirmedBooking(props) {

  return (
    <div className='confirmation-page'>
      <div className="confirmation-message">
        <h1>Thank you, {props.formData.firstName}!</h1>
        <h2>Your reservation on {props.formData.resDate.slice(-5)}, at {props.formData.resTime} is confirmed.</h2>
        <h2>We look forward to seeing you then.</h2>
      </div>
   
    </div>
  )
}