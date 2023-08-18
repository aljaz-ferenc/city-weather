import "./WeatherDisplay.scss";
import { useWeather } from "../../WeatherContext";
import { capitalizeAll } from "../../functions/utils";

export default function WeatherDisplay() {
  const { weather } = useWeather();

  return (
    <div className="weather-display">
      {weather && (
        <>
          <div className="top">
            <p className="top__city">{weather.name}</p>
            <p className="top__description">
              {capitalizeAll(weather.description)}
            </p>
            <div className="top__weather">
              <img src={`icons/${weather.icon}.svg`} alt="" />
            </div>
            <p className="top__temp">{weather.temp} &#8451;</p>
          </div>
          <div className="bottom">
            <div className="bottom__feels-like">
              <p>Feels Like</p>
              <p>{weather.feels_like} &#8451;</p>
            </div>
            <div className="bottom__min">
              <p>Min Temp</p>
              <p>{weather.temp_min} &#8451;</p>
            </div>
            <div className="bottom__max">
              <p>Max Temp</p>
              <p>{weather.temp_max} &#8451;</p>
            </div>
            <div className="bottom__humidity">
              <p>Humidity</p>
              <p>{weather.humidity}%</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
