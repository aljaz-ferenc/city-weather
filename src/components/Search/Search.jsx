import "./Search.scss";

import { useState } from "react";
import SearchHistory from "./SearchHistory";
import { useWeatherData } from "../../functions/hooks";
import { useWeather } from "../../WeatherContext";
import { capitalize } from "../../functions/utils";

import { useForm } from "react-hook-form";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Search() {
  const { error, searches, isPending } = useWeather();
  const fetchWeather = useWeatherData();
  const [isOpen, setIsOpen] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setValue,
  } = useForm();

  function submitForm(data) {
    resetField("city");
    fetchWeather(data.city).then((data) => {
      data === "error" ? setIsOpen(true) : setIsOpen(false);
    });
  }

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {!isOpen && (
        <GiHamburgerMenu
          size={"2rem"}
          onClick={handleToggleMenu}
          className="search__toggle-btn"
        />
      )}
      {isOpen && (
        <AiOutlineClose
          className="search__toggle-btn"
          size={"2rem"}
          onClick={handleToggleMenu}
        />
      )}
      <div className={isOpen ? "search open" : "search"}>
        <form
          noValidate
          autoCorrect="false"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="search__input-container">
            <input
              className="input"
              type="text"
              placeholder="Search City"
              {...register("city", {
                required: "Required",
              })}
            />
            {errors?.city && <p className="error">{errors.city.message}</p>}
            {error && !errors?.city && (
              <p className="error">{capitalize(error)}</p>
            )}
          </div>
          <button type="submit">{isPending ? "Loading..." : "Search"}</button>
        </form>
        {searches.length > 0 && (
          <SearchHistory setValue={setValue} setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
}
