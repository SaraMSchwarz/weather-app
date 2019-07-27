import React from 'react'

const Search = (props) => {
  return(
    <form onSubmit = {props.loadWeather}>
      <input type="text" name="city" placeholder="CITY"/>
      <input type="text" name="country" placeholder="COUNTRY"/>
      <button>SEARCH</button>
    </form>
  )
}

export default Search
