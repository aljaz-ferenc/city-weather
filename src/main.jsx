import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { WeatherProvider } from "./WeatherContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
);
