import axios from "axios";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

function App() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false,
  });

  const search = async (city, country) => {
    setQuery("");
    setWeather({ ...weather, loading: true });
    const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    await axios
      .get(url)
      .then((res) => {
        console.log("res", res);
        setWeather({ data: res.data, loading: false, error: false });
      })
      .catch((error) => {
        setWeather({ ...weather, data: {}, error: true });
        console.log("error", error);
      });
  };

  return (
    <div className="App">
      <h3 className="h3">Today's Weather</h3>
      <div className="SectionLine"/>
      <SearchBar query={query} search={search} />


      <h3 className="h3">Search History</h3>
      <div className="SectionLine"/>
    </div>
  );
}

export default App;
