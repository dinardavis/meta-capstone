import React from "react"


export default function AvailableTimes(props) {
  const [previousTime, setPreviousTime] = React.useState();

  const displayTimes = Object.keys(props.times).map(time => {
    if(props.formData.resDate) {
      if(props.times[time] && time !== 'undefined') {
        return (<option key={time} id={time} value={time}>{time}</option>)
      } else if(!props.times[time] && time !== 'undefined') {
        return (<option key={time} id={time} value={time} disabled>{time}</option>)
      } 
    }
  })
  
  React.useEffect(() => {
    updateTimes();
  }, [props.formData.resTime])

  function updateTimes() {
    if(props.formData.resTime) { 
      setPreviousTime(props.formData.resTime)
      if(previousTime !== props.formData.resTime) {
        props.times[previousTime] = true;
      }
    }
  }

  return (
    <select 
      id="resTime"
      value={props.formData.resTime}
      onChange={props.handleChange}
      name="resTime"
      required
    >
      <option value="">-- Choose Time --</option>
      {displayTimes}
    </select>
  )
}

  
