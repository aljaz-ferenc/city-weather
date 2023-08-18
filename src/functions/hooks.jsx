import { useWeather } from "../WeatherContext";

export function useWeatherData() {
  const { updateWeather, addSearch, searches, setError, setPendingStatus } = useWeather();

  async function fetchWeather(city) {
    setPendingStatus(true)
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );

      if (response.status !== 200) {
        throw new Error("City not found");
      }

      const weather = await response.json();

      const weatherData = {
        ...weather.main,
        ...weather.weather[0],
        name: weather.name,
        country: weather.sys.country,
      };

      updateWeather(weatherData);
      searches.includes(weatherData.name) || addSearch(weatherData.name);
      setError(null);

      return "success";
    } catch (err) {
      setError(err.message);
      return "error";
    }finally{
      setPendingStatus(false)
    }
  }
  return fetchWeather;
}
