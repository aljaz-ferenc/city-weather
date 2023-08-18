import { createContext, useContext, useReducer, useState } from "react";

const WeatherContext = createContext();

const initialState = {
  weather: null,
  searches: [],
  error: "",
  isPending: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "weather/update":
      return {
        ...state,
        weather: action.payload,
      };

    case "searches/add":
      const newSearches =
        state.searches.length > 4 ? state.searches.slice(0, 4) : state.searches;

      return {
        ...state,
        searches: [action.payload, ...newSearches],
      };

    case "error/set":
      return {
        ...state,
        error: action.payload,
      };

    case "pending/set":
      return {
        ...state,
        isPending: action.payload,
      };
  }
}

function WeatherProvider({ children }) {
  const [{ weather, searches, error, isPending }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function addSearch(search) {
    dispatch({ type: "searches/add", payload: search });
  }

  function updateWeather(weather) {
    dispatch({ type: "weather/update", payload: weather });
  }

  function setError(error) {
    dispatch({ type: "error/set", payload: error });
  }

  function setPendingStatus(status) {
    dispatch({ type: "pending/set", payload: status });
  }

  return (
    <WeatherContext.Provider
      value={{
        weather,
        searches,
        error,
        isPending,
        updateWeather,
        setError,
        addSearch,
        setPendingStatus,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContext);
  return context;
}

export { WeatherProvider, useWeather };
