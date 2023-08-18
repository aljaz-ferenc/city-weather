import { useWeather } from "../../WeatherContext";
import "./SearchHistory.scss";
import { useWeatherData } from "../../functions/hooks";

export default function SearchHistory({ setValue, setIsOpen }) {
  const { searches } = useWeather();
  const fetchWeather = useWeatherData();

  function handleClick(search) {
    setValue("city", search);
    fetchWeather(search);
    setIsOpen(false);
  }

  return (
    <div className="search-history">
      <h4>Search History</h4>
      <div className="search-history__searches">
        {searches &&
          searches.map((search, i) => (
            <p onClick={() => handleClick(search)} key={search}>
              {search}
            </p>
          ))}
      </div>
    </div>
  );
}
