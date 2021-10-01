import axios from "axios";

export default {
  getWeather(city) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cf3031c55bea81f5f9c212bc10ae739`
    );
  },
};
