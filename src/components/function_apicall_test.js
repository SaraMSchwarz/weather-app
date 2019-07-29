import React from 'react';
import apiConfig from './apiKeys';

function dailyWeather() {
  const [fullData, setFullData] = useState();
  const [dailyData, setDailyData] = useState();
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
      const url =
      `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&APPID=${apiConfig.owmKey}`

      fetch(url)
      .then(response => response.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state))
      })
    }
      return (
        <div>
          <h1>weather</h1>
        </div>
      )
    }
}

export default DailyWeather;
