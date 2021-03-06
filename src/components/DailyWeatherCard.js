import React from 'react'
import '../css/DailyWeatherCard.css'

const moment = require('moment')

const DailyWeatherCard = ({ reading }) => {
  let newDate = new Date();
  const dayOfWeek = reading.dt * 1000
  newDate.setTime(dayOfWeek)
  //
  // <i class="wi wi-night-sleet"></i>
  // <i class="owf owf-200"></i>

//   Use the condition code as class name prefixed with owf-
// Class name sample owf-200
// Icon sample <i class="owf owf-200"></i>

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`
    // const imgURL = `wi wi-${reading.weather[0].id}`

  return (
    <div className="col-sm-2">
      <div className="card-block">
        <h4 className="card-title">{moment(newDate).format('dddd')}</h4>
        <p className="text-muted">{moment(newDate).format('MMM Do, h:mm a')}</p>
        <i className={imgURL}></i>
        <h4>{Math.round(reading.main.temp)} °F</h4>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DailyWeatherCard
