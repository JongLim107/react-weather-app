import React, { useState } from "react";
import SearchBar from "../components/search-bar";
import NotFound from "../components/not-found";
import NoRecord from "../components/no-record";
import ForecastView from "../components/forecast-view";
import SearchHistory from "../components/search-history";
import { QueryWeather } from "../requests/weather";
import QueryContextProvider from "../context/app-context";
import "./app.css";

const App = () => {
  const [query, setQuery] = useState({ city: "", country: "" });
  const [weather, setWeather] = useState({ data: null, error: false });
  const [history, setHistory] = useState([]);

  const handleSearchHistory = (time) => {
    const clickItem = history.filter((item) => item.time === time)[0];
    handleSearch(clickItem.city, clickItem.country);
  };

  const handleDeleteHistory = (time) => {
    setHistory(history.filter((item) => item.time !== time));
  };

  const insertHistory = (newQuery) => {
    const index = history.findIndex((item) => {
      return (
        item.city.toUpperCase() === newQuery.city.toUpperCase() &&
        item.country.toUpperCase() === newQuery.country.toUpperCase()
      );
    });

    setHistory([
      { ...newQuery, time: Date.now() },
      ...history.filter((item, idx) => index !== idx),
    ]);
  };

  const handleSearch = (city, country) => {
    QueryWeather(city, country)
      .then((data) => {
        insertHistory({ city, country });
        setWeather({ error: false, data });
        setQuery({ city: "", country: "" });
      })
      .catch((e) => {
        setWeather({ error: true, data: null });
      });
  };

  return (
    <QueryContextProvider value={{ query, setQuery }}>
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
    </QueryContextProvider>
  );
};

export default App;
