import React, { useState } from "react";
import SearchBar from "../components/search-bar";
import NotFound from "../components/not-found";
import NoRecord from "../components/no-record";
import ForecastView from "../components/forecast-view";
import SearchHistory from "../components/search-history";
import { QueryWeather } from "../requests/weather";
import "./app.css";

const App = () => {
  const [history, setHistory] = useState([
    // { city: "Singapore", country: "Singapore", time: Date.now() },
    // { city: "Xiang Ge Li La", country: "China", time: Date.now() },
  ]);
  const [weather, setWeather] = useState({ data: null, error: false });

  const handleSearchHistory = (time) => {
    const query = history.filter((item) => item.time === time)[0];
    handleSearch(query.city, query.country);
  };

  const handleDeleteHistory = (time) => {
    setHistory(history.filter((item) => item.time !== time));
  };

  const insertHistory = (query) => {
    const index = history.findIndex((item) => {
      return item.city == query.city && item.country == query.country;
    });

    setHistory([
      { ...query, time: Date.now() },
      ...history.filter((item, idx) => index !== idx),
    ]);
  };

  const handleSearch = (city, country) => {
    QueryWeather(city, country)
      .then((data) => {
        insertHistory({ city, country });
        setWeather({ error: false, data });
      })
      .catch((e) => {
        setWeather({ error: true, data: null });
      });
  };

  return (
    <div className="App">
      <p className="h4 fw-bold">Today's Weather</p>
      <div className="SectionLine" />
      <SearchBar search={handleSearch} />

      <div className="Forecast">
        {weather.error && <NotFound />}
        {weather.data && <ForecastView data={weather.data} />}
      </div>

      <p className="h4 fw-bold">Search History</p>
      <div className="SectionLine" />

      <div className="SearchHistoryContainer">
        {history.length === 0 ? (
          <NoRecord />
        ) : (
          history.map((item, index) => (
            <SearchHistory
              {...item}
              key={item.time}
              index={index}
              onSearch={handleSearchHistory}
              onDelete={handleDeleteHistory}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
