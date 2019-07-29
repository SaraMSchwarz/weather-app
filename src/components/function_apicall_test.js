import React from 'react';
import apiConfig from './apiKeys';

class DailyWeather extends React.Compoment {
  state = {
    fullData: [],
    dailyData: []
   }

  componentDidMount = () => {
      const url =
      `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&APPID=${apiConfig.owmKey}`

      fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state))
      })
    }

export default DailyWeather;
