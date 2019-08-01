import React from 'react'

const SearchForm = (props) => {
  return(
    <form onSubmit = {props.allWeather}>
      <input type="text" name="zipcode" placeholder="ZIP CODE"/>
      <button>Get Weather</button>
    </form>
  )
}

export default SearchForm
