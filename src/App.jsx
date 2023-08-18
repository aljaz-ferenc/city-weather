import "./App.scss";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <WeatherDisplay />
        <Search />
      </div>
    </div>
  );
}

export default App;
