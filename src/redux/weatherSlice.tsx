import { createSlice } from '@reduxjs/toolkit';

interface weatherState {
  weatherData: null | any;
  error: null | string;
}

const initialState: weatherState = {
  weatherData: null,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData(state, action) {
      state.weatherData = action.payload;
      state.error = null;
    },
    setWeatherError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setWeatherData, setWeatherError } = weatherSlice.actions;

export default weatherSlice.reducer;
