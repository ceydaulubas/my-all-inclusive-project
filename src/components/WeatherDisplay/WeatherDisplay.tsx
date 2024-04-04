// components/WeatherDisplay.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchWeatherApi } from '../../api/fetchWeatherApi';

interface WeatherData {
  main: any;
  // İstediğiniz hava durumu veri yapısını buraya ekleyin
}

const WeatherDisplay: React.FC = () => {
  const weatherData = useSelector<RootState, WeatherData | null>((state) => state.weather.weatherData);
  const error = useSelector((state: RootState) => state.weather.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // Kullanıcı izni varsa, gerçek konumunu al
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          await fetchWeatherApi(dispatch, latitude, longitude);
        }, async () => {
          // İzin yoksa, İsveç'in koordinatlarını kullan
          await fetchWeatherApi(dispatch, 59.3293, 18.0686); // İsveç'in koordinatları
        });
      } else {
        // Tarayıcı konum servisi desteklemiyorsa, İsveç'in koordinatlarını kullan
        await fetchWeatherApi(dispatch, 59.3293, 18.0686); // İsveç'in koordinatları
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='weather-display-container'>
      <h2>Weather Information</h2>
      {error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div>
          <p>Temperature: {weatherData.main.temp}</p>
          <p>Humidity: {weatherData.main.humidity}</p>
          <p>Pressure: {weatherData.main.pressure}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
