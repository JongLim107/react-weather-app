import React from "react";
import { FormInput } from "../form-input";
import { useQueryContext } from "../../context/app-context";
import "./styles.css";

function SearchBar({ search }) {
  const { query, setQuery } = useQueryContext();

  return (
    <form
      className="SearchBar"
      onSubmit={(event) => {
        event.preventDefault();
        search(query.city, query.country);
      }}
    >
      <FormInput
        label="City"
        required={true}
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
          <button
            type="button"
            onClick={() => setQuery({ city: "", country: "" })}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
