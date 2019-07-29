import React from 'react';

import './App.css';
import Heading from './components/Heading'
import Search from './components/Search'
import apiConfig from './apiKeys';
import Forecast from './components/Forecast'


class App extends React.Component {
  state = {
    tempertature: "",
    city: "",
    country: "",
    description: "",
    error: ""
  }

//changes to be made to api: get a five day forecast at a specific UTC time
//and search by zipcode (haven't been able to get it to work)

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiConfig.openweatherKey}`);

    const response = await api_call.json();

    if (city&&country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "You need to fill out the search fields."
      })
    }
  }

  render() {
    return (
      <div>
        <Heading />
        <Search loadWeather={this.getWeather} />
        <Forecast
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
