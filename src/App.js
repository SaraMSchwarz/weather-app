import React from 'react';
import './App.css';
import Heading from './components/Heading'
import AllWeather from './components/AllWeather'
// import SearchForm from './components/SearchForm'

class App extends React.Component {
  render() {

    return (
      <div>
        <Heading />
        <br />
        <AllWeather />
      </div>
    )
  }
}

export default App;
