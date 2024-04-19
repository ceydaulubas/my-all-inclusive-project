import React, { useEffect, useState } from "react";
import { format } from "date-fns";

// Import Api
import { fetchCurrentWeather, fetch5DaysWeather } from "../../api/index";

import downArrow96 from "../../assets/icons/downArrow96.png";
import upArrow96 from "../../assets/icons/upArrow96.png";
import location48 from "../../assets/icons/location48.png";

import "./WeatherDisplay.scss";

interface WeatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string;
}

const WeatherDisplay: React.FC = () => {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<WeatherData | null>(null);
  const [forecastWeatherData, setForecastWeatherData] = useState<
    number[] | null
  >(null);
  const [error, setError] = useState<string>("");

  const kelvinToCelcius = (kelvin: number) => {
    return (kelvin - 273.15).toFixed(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getPosition = () => {
          return new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        };

        const position = await getPosition();
        const { latitude, longitude } = position.coords;

        const [currentData, forecastData] = await Promise.all([
          fetchCurrentWeather(latitude, longitude),
          fetch5DaysWeather(latitude, longitude),
        ]);

        setCurrentWeatherData(currentData);
        setForecastWeatherData(forecastData.list.slice(0, 5));

        console.log(forecastData);
      } catch (error) {
        setError("Error fetching weather data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="weather-display-container">
      <h5>Weather Information</h5>
      <div className="current-weather-display-container">
        {error ? (
          <div>
            <p>Oops! Something went wrong:</p>
            <p>{error}</p>
          </div>
        ) : (
          <>
            {currentWeatherData !== null && forecastWeatherData !== null ? (
              <div className="weather-info-container">
                <div className="weather-icon-container">
                  <div>
                    <img
                      src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`}
                      alt="weather-icon"
                      className="current-weather-icon"
                    />
                    <p className="weather-description">
                      {currentWeatherData.weather[0].description
                        .split(" ")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </p>

                    <div className="temp-details-container">
                      <img
                        src={upArrow96}
                        alt="upArrow96"
                        className="weather-forecast-up-arrow"
                      />
                      <p>{kelvinToCelcius(currentWeatherData.main.temp_max)}°C</p>
                      <img
                        src={downArrow96}
                        alt="downArrow96"
                        className="weather-forecast-down-arrow"
                      />
                      <p>{kelvinToCelcius(currentWeatherData.main.temp_min)} °C</p>
                    </div>
                  </div>
                </div>
                <div className="weather-details-container">
                  <div className="temp-container">
                    <p className="current-temp">
                      {kelvinToCelcius(currentWeatherData.main.temp)} °C
                    </p>
                  </div>
                  <div className="location-icon-container">
                    <img
                      src={location48}
                      alt="location48"
                      className="weather-location-icon"
                    />
                    <p className="current-location">{currentWeatherData.name}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}

            <div className="weather-three-hour-forecast-container">
              {forecastWeatherData?.map((item: any, index: number) => (
                <div key={index}>
                  <div className="weather2">
                    <p>{format(new Date(item.dt_txt), "h:mm a")}</p>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                      alt="weather-icon"
                    />
                    <p>{kelvinToCelcius(item.main.temp)} °C</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherDisplay;
