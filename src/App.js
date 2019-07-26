import React from 'react';

import './App.css';
import Heading from './components/Heading'
import Search from './components/Search'
import apiConfig from './apiKeys';

class App extends React.Component {
  state = {
    tempertature: "",
    city: "",
    country: "",
    description: "",
    error: ""
  }
  render() {
    return (
      <div>
        <Heading />
        <Search />
      </div>
    )
  }
}

export default App;
