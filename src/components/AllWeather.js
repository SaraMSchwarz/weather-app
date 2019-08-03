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

  handleSearch = e => {
  e.preventDefault();
  console.log('Weather for:', this.state.zipCode);
  this.search(this.state.zipCode)
}

  search = (zipCode) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&APPID=${Api_Key}`
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

  componentDidMount = () => {
    this.search('20176')
  }

  formatDailyWeatherCard = () => {
    return this.state.dailyData.map((reading, index) => <DailyWeatherCard reading={reading} key={index} />)
  }

  render() {
    return (
      <div className="container">
        <div className="form-container">
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            value={this.state.zipCode}
            name="searchBox"
            id="searchBox"
            placeholder="Enter Zipcode"
            onChange={this.handleChange} />
          <button
            onClick={this.handleSearch}>search</button>
        </form>
      </div>

        <div className="row justify-content-center">
          {this.formatDailyWeatherCard()}
        </div>

      </div>
    )
  }
}

export default AllWeather;
