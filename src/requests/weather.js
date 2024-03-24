import axios from "axios";

export const QueryWeather = async (city, country) => {
  const apiKey = "16d9fb711fa1bb274d542ce5fb521f8e";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=en`;
  return await axios
    .get(weatherUrl)
    .then((res) => {
      const { name, main, sys, weather } = res.data;
      return {
        city: name,
        country: sys.country,
        main: weather[0].main,
        description: weather[0].description,
        tempMin: main.temp_min,
        tempMax: main.temp_max,
        humidity: main.humidity,
        time: Date.now(),
      };
    })
};
