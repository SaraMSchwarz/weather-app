import React from 'react'

const ToggleWeather = props => {
  return(
    <React.Fragment>
    <input
      className="form-check-input"
      type="radio"
      name="degree-type"
      id="celsius"
      value="celsius"
      checked={degreeType === "celsius"}
      onChange={updateForecastDegree}
      />
      <input
      className="form-check-input"
      type="radio"
      name="degree-type"
      id="fahrenheit"
      value="fahrenheit"
      checked={degreeType === "fahrenheit"}
      onChange={updateForecastDegree}
      />

  </React.Fragment>
  )
}

export default ToggleWeather
