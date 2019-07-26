import React from 'react';

import './App.css';
import Heading from './components/Heading'
import Form from './components/Form'
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
        <Form />
      </div>
    )
  }
}

export default App;
