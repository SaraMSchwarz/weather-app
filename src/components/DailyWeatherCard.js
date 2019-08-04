import React from 'react'
import '../css/DailyWeatherCard.css'

const moment = require('moment')

const DailyWeatherCard = ({ reading }) => {
  let newDate = new Date();
  const dayOfWeek = reading.dt * 1000
  newDate.setTime(dayOfWeek)

const imgURL = `wi wi-${reading.weather[0].id} wi-5x`

// wi wi-night-sleet

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        <i className={imgURL}></i>
        <h3>{Math.round(reading.main.temp)} °F</h3>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DailyWeatherCard
