// api/fetchWeatherApi.ts
import axios from 'axios';
import { Dispatch } from 'redux';
import { setWeatherData, setWeatherError } from '../redux/weatherSlice';

const API_KEY = 'f13c4a1e0110a21f84487056745a3c76';

const fetchWeatherApi = async (dispatch: Dispatch, lat: number, lon: number) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    dispatch(setWeatherData(response.data));
  } catch (error) {
    dispatch(setWeatherError('Error fetching weather data'));
  }
};

export { fetchWeatherApi };

