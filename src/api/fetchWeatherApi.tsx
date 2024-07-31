import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const fetchCurrentWeather = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching current weather data');
  }
};

const fetch5DaysWeather = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching 5 days weather data');
  }
};

export { fetchCurrentWeather, fetch5DaysWeather };
