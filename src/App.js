import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const weather_key = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seattle,usa&appid=${weather_key}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
