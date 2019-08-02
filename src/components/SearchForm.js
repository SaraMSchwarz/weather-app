import React from 'react'

const SearchForm = (props) => {
  return(
    <form onSubmit = {props.AllWeather}>
      <input type="text" name="zipCode" placeholder="ZIP CODE"/>
      <button>Get Weather</button>
    </form>
  )
}

export default SearchForm
