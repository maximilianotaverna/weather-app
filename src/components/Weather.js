import React from "react";
import PropTypes from "prop-types";
import useFetch from "../effects/useFetch";
import StyledWeather from "./styles/Styled.weather";
import { displayDate } from "../utils/displayDate";
import { displayDay } from "../utils/displayDay";
import { displayCountry } from "../utils/displayCountry";

const Weather = ({ city }) => {
  const { data } = useFetch(city);
  // NOTE: filter openweather results for 5 day forecast
  const dailyForecast =
    data?.city && data.list.filter((element, item) => item % 8 === 8 - 1);

  const name = data?.city?.name;
  const date = displayDate(new Date());
  const country = displayCountry(data?.city?.country);
  const iconURL = "http://openweathermap.org/img/wn/";

  // Forecast Today
  const temp = data?.list[0]?.main?.temp && Math.round(data.list[0].main.temp);
  const desc =
    data?.list[0]?.weather[0]?.description &&
    data.list[0].weather[0].description;
  const icon = data?.list[0]?.weather[0]?.icon && data.list[0].weather[0].icon;
  // const day = displayDay(data?.list[0]?.dt_txt);
  return (
    <StyledWeather>
      {data === null && <>Search by <b>city</b> or <u>country</u> to get the weather</>}
      {name && (
        <div className="layout">
          <div className="today">
            <div className="location">
              <p className="city">{name}</p>
              <p className="country">{country}</p>
              <p className="date">{date}</p>
            </div>
            <div className="weather">
              {temp && (
                <p className="temp">
                  {temp}
                  <sup>°c</sup>
                </p>
              )}
              {desc && (
                <img
                  className="icon"
                  alt={desc}
                  src={`${iconURL}${icon}@4x.png`}
                />
              )}
              {/* <p className="day">{day}</p> */}
              <p className="day">Today</p>
              {desc && <p className="description">{desc}</p>}
            </div>
          </div>
          <ul className="week">
            {dailyForecast?.map((item, index) => (
              <li className="forecast-item" key={item?.dt}>
                <img
                  className="forecast-icon"
                  alt={`${item?.weather[0]?.description}`}
                  src={`${iconURL}${item?.weather[0]?.icon &&
                    item.weather[0].icon}@2x.png`}
                />
                <p className="forecast-temp">
                  {item?.main?.temp && Math.round(item.main.temp)}°c
                </p>
                <p className="forecast-day">{displayDay(item?.dt_txt)}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </StyledWeather>  
  );
};

Weather.propTypes = {
  city: PropTypes.string,
};

Weather.defaultProps = {
  city: null,
};

export var tempData = 15;

export default Weather;
