// components/WeatherDisplay.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { fetch5DaysWeatherApi, fetchCurrentWeatherApi } from "../../api/index";
import sun from "../../assets/icons/sun.png";

import "./WeatherDisplay.scss";

interface WeatherData {
  main: any;
  city: { name: string };
  list: any[];
  weather: any;
}

const WeatherDisplay: React.FC = () => {
  const weatherData = useSelector<RootState, WeatherData | null>(
    (state) => state.weather.weatherData
  );
  const error = useSelector((state: RootState) => state.weather.error);
  const dispatch = useDispatch();

  const kelvinToCelcius = (kelvin: number) => {
    return (kelvin - 273.15).toFixed(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      // Kullanıcı izni varsa, gerçek konumunu al
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            await fetch5DaysWeatherApi(dispatch, latitude, longitude);
          },
          async () => {
            // İzin yoksa, İsveç'in koordinatlarını kullan
            await fetch5DaysWeatherApi(dispatch, 59.3293, 18.0686); // İsveç'in koordinatları
          }
        );
      } else {
        // Tarayıcı konum servisi desteklemiyorsa, İsveç'in koordinatlarını kullan
        await fetch5DaysWeatherApi(dispatch, 59.3293, 18.0686); // İsveç'in koordinatları
      }
    };

    fetchData();
  }, [dispatch]);

  console.log(weatherData);

  return (
    <div className="weather-display-container">
      <h2>Weather Information</h2>
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          <div>
            <div>
              <img src={sun} alt="sun" className="weather-forecast-icon" />
              <p>{weatherData.list[0].weather[0].description}</p>
              <p>{kelvinToCelcius(weatherData.list[0].main.temp)} °C</p>
            </div>
            <div>
              <p> {weatherData.city.name}</p>
            </div>
          </div>

          <div className="weather-forecast-hourly-container">
            <h3>Now</h3>
            <img src={sun} alt="sun" className="weather-forecast-icon" />
            <p>13°C</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
