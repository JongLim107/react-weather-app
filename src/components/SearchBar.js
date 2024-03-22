import React from "react";
import { FormInput } from "./FormInput";
import "./SearchBar.css"

function SearchBar({ query = {}, search }) {
  return (
    <form
      className="SearchBar"
      onSubmit={(event) => {
        event.preventDefault();
        search(event.target.city.value, event.target.country.value);
      }}
    >
      <FormInput label="City" value={query.city} />
      <FormInput label="Country" value={query.city} />

      <div className="SearchBar-Wrapper">
        <div class="col">
          <button type="submit">Search</button>
        </div>
        <div class="col">
          <button type="button">Clear</button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
