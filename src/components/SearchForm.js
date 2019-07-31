import React from 'react'

const SearchForm = (props) => {
  return(
    <form onSubmit = {props.loadWeather}>
      <input type="text" name="zipcode" placeholder="ZIP CODE"/>
      <button>SEARCH</button>
    </form>
  )
}

export default SearchForm
