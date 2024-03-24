import React, { useState } from "react";
import { FormInput } from "../form-input";
import "./styles.css";

function SearchBar({ search }) {
  const [query, setQuery] = useState({
    city: "",
    country: "",
  });

  const clear = () => {
    setQuery({ city: "", country: "" });
  };

  return (
    <form
      className="SearchBar"
      onSubmit={(event) => {
        event.preventDefault();
        search(query.city, query.country);
        clear();
      }}
    >
      <FormInput
        label="City"
        value={query.city}
        onChange={(e) =>
          setQuery({
            ...query,
            city: e.target.value,
          })
        }
      />
      <FormInput
        label="Country"
        value={query.country}
        onChange={(e) =>
          setQuery({
            ...query,
            country: e.target.value,
          })
        }
      />

      <div className="SearchBar-Btn-Wrapper">
        <div>
          <button type="submit">Search</button>
        </div>
        <div>
          <button type="button" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
