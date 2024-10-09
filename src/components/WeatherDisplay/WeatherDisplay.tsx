import React, { useEffect, useState, useCallback } from 'react';

// Import Api
import { fetchCurrentWeather, fetch5DaysWeather } from '../../api/index';

import { location48 } from '../../assets/icons/index';
import { format } from 'date-fns';

import {
    WeatherDisplayContainer,
    WeatherHeader,
    CurrentWeatherDisplayContainer,
    WeatherInfoContainer,
    WeatherIconContainer,
    CurrentWeatherIcon,
    WeatherDescription,
    WeatherThreeHoursForecastContainer,
    Weather2,
    WeatherDetailsContainer,
    CurrentTemp,
    WeatherLocationIconContainer,
    WeatherLocationIcon,
    CurrentLocation,
    StyledLoadingOutlined,
} from './WeatherDisplay.styles';

// Import the interfaces
import { WeatherData } from '../../helper/interfaces';

const WeatherDisplay: React.FC = () => {
    const [currentWeatherData, setCurrentWeatherData] = useState<WeatherData | null>(null);
    const [forecastWeatherData, setForecastWeatherData] = useState<number[] | null>(null);
    const [error, setError] = useState<string>('');

    const kelvinToCelcius = (kelvin: number) => {
        return (kelvin - 273.15).toFixed(0);
    };

    // useCallback to memoize the fetchData function
    const fetchData = useCallback(async () => {
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
        } catch (error) {
            setError('Error fetching weather data');
        }
    }, []); // Empty dependency array means the function won't change unless the dependencies change.

    useEffect(() => {
        fetchData();
    }, [fetchData]); // fetchData is added as a dependency, so it will only re-run if fetchData changes.

    return (
        <WeatherDisplayContainer>
            <WeatherHeader>Weather Information</WeatherHeader>
            <CurrentWeatherDisplayContainer>
                {error ? (
                    <div>
                        <p>Oops! Something went wrong:</p>
                        <p>{error}</p>
                    </div>
                ) : (
                    <>
                        {currentWeatherData !== null && forecastWeatherData !== null ? (
                            <WeatherInfoContainer>
                                <WeatherIconContainer>
                                    <CurrentWeatherIcon
                                        src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`}
                                        alt="weather-icon"
                                        className="current-weather-icon"
                                    />
                                    <WeatherDescription>
                                        {currentWeatherData.weather[0].description
                                            .split(' ')
                                            .map(
                                                (word) =>
                                                    word.charAt(0).toUpperCase() + word.slice(1)
                                            )
                                            .join(' ')}
                                    </WeatherDescription>
                                </WeatherIconContainer>
                                <WeatherDetailsContainer>
                                    <CurrentTemp>
                                        {kelvinToCelcius(currentWeatherData.main.temp)} °C
                                    </CurrentTemp>
                                    <WeatherLocationIconContainer>
                                        <WeatherLocationIcon src={location48} alt="location48" />
                                        <CurrentLocation>{currentWeatherData.name}</CurrentLocation>
                                    </WeatherLocationIconContainer>
                                </WeatherDetailsContainer>
                            </WeatherInfoContainer>
                        ) : (
                            <StyledLoadingOutlined spin />
                        )}

                        <WeatherThreeHoursForecastContainer>
                            {forecastWeatherData?.map((item: any, index: number) => (
                                <div key={index}>
                                    <Weather2>
                                        <p>{format(new Date(item.dt_txt), 'h:mm a')}</p>
                                        <img
                                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                            alt="weather-icon"
                                        />
                                        <p>{kelvinToCelcius(item.main.temp)} °C</p>
                                    </Weather2>
                                </div>
                            ))}
                        </WeatherThreeHoursForecastContainer>
                    </>
                )}
            </CurrentWeatherDisplayContainer>
        </WeatherDisplayContainer>
    );
};

export default WeatherDisplay;
