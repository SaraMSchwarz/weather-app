import React from 'react';
import apiConfig from '../apiKeys';
import DailyWeatherCard from './DailyWeatherCard'

class AllWeather extends React.Component {
  state = {
    allData: [],
    dailyData: [],
    zipCode: ''
  }

  componentDidMount = () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?zip=20176&units=imperial&APPID=${apiConfig.openweatherKey}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("21:00:00"))
      this.setState({
        allData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  formatDailyWeatherCard = () => {
    return this.state.dailyData.map((reading, index) => <DailyWeatherCard reading={reading} key={index} />)
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.formatDailyWeatherCard()}
        </div>
      </div>
    )
  }
}

export default AllWeather;
