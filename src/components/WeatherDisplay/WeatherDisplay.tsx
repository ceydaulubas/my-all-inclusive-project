import React, { useEffect, useState } from "react";
import { fetchCurrentWeather, fetch5DaysWeather } from "../../api/index";
import downArrow96 from "../../assets/icons/downArrow96.png";
import sun from "../../assets/icons/sun.png";
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
  }[];
  name: string;
}

interface ForecastItem {
  main: {
    temp: number;
  };
}

const WeatherDisplay: React.FC = () => {
  const [currentWeatherData, setCurrentWeatherData] =
    useState<WeatherData | null>(null);
  const [forecastWeatherData, setForecastWeatherData] = useState<
    number[] | null
  >(null);
  const [error, setError] = useState<string>("");

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
        setForecastWeatherData(
          forecastData.list
            .slice(0, 5)
            .map((item: ForecastItem) => item.main.temp)
        );
      } catch (error) {
        setError("Error fetching weather data");
      }
    };

    fetchData();
  }, []);

  const kelvinToCelcius = (kelvin: number) => {
    return (kelvin - 273.15).toFixed(0);
  };

  return (
    <div className="weather-display-container">
      <h2>Weather Information</h2>
      {error ? (
        <p>{error}</p>
      ) : currentWeatherData && forecastWeatherData ? (
        <div className="weather-info-container">
          <div className="weather-icon-container">
            <div>
              <img src={sun} alt="sun" className="weather-forecast-icon" />
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
      {/* <div className="forecast-container">
        <h3>Next 3 hours Temperature:</h3>
        {forecastWeatherData && forecastWeatherData.length > 0 ? (
          forecastWeatherData.map((forecast, index) => (
            <p key={index} className="forecast-item">
              {forecast}
            </p>
          ))
        ) : (
          <p>No forecast data available</p>
        )}
      </div> */}
    </div>
  );
};

export default WeatherDisplay;
