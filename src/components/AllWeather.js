import React from 'react';
import DailyWeatherCard from './DailyWeatherCard'

const Api_Key = "4eaecf7e62383d8e2f34682cb1f0eb13";

class AllWeather extends React.Component {
  state = {
    allData: [],
    dailyData: [],
    zipCode: ''
  }

  handleChange = e => {
  this.setState({
    zipCode: e.target.value
    })
  }


  componentDidMount = () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?zip=20176&units=imperial&APPID=${Api_Key}`
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
      <input
        type="text"
        name="zipCode"
        placeholder="ZIP CODE"
        onChange={this.handleChange}
        value={this.state.zipCode}
      />
      <button>Get Weather</button>
        <div className="row justify-content-center">
          {this.formatDailyWeatherCard()}
        </div>

      </div>
    )
  }
}

export default AllWeather;
