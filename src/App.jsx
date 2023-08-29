import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=f4f2342a095e2bb8c963969b922eb45b`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
      setLocation("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="input"
          value={location}
          onChange={(e) => {
            let v = e.target.value;
            setLocation(v);
          }}
          onKeyDown={searchLocation}
        />
        <div className="upper">
          <div className="location">
            {data.name ? <h4>{data.name}</h4> : null}
          </div>
          <div className="degree">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h4>{data.weather.description}</h4> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feel">
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
          </div>
          <div className="humid">
            {data.main ? <p>{data.main.humidity.toFixed()}%</p> : null}
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
