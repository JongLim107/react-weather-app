import React, { useContext } from "react";

const initialState = {
  query: { city: "", country: "" },
  setQuery: () => {},
};

const QueryContext = React.createContext(initialState);

export const useQueryContext = () => useContext(QueryContext);

const QueryContextProvider = ({ children, value }) => (
  <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
);

export default QueryContextProvider;
