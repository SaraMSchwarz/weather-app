import React from 'react'

const Forecast = (props) => {
  return (
    <div>
      {props.country && props.city && <p>location: {props.city}, {props.country} </p>}
      {props.temperature && <p>temperature: {props.temperature} </p>}
      {props.description && <p>weather: {props.description} </p>}
      {props.error && <p>{props.error}</p>}
    </div>
  )
}

export default Forecast
