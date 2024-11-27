import React, { useEffect, useState, useCallback } from 'react';

// Import Api
import { fetchCurrentWeather, fetch5DaysWeather } from '../../api/index';

import { location48 } from '../../assets/icons/index';
import { format } from 'date-fns';
import { weatherConditionsImage } from '../../assets/common/links';

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
    const [backgroundImage, setBackgroundImage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isDay, setIsDay] = useState<boolean>(true);

    const kelvinToCelcius = (kelvin: number) => {
        return (kelvin - 273.15).toFixed(0);
    };

    // Function to determine the background image based on the current weather and time of day
    const getBackgroundImage = (condition: string, hour: number): string => {
        const isDaytime = hour > 6 && hour < 18;
        setIsDay(isDaytime);

        let imageKey: keyof typeof weatherConditionsImage;

        switch (condition) {
            case 'Clear':
            case 'few clouds':
            case 'Clouds':
                imageKey = isDaytime ? 'clearMorning' : 'clearNight';
                break;
            case 'scattered clouds':
                imageKey = isDaytime ? 'scatteredCloudsMorning' : 'scatteredCloudsNight';
                break;
            case 'Drizzle':
            case 'Rain':
                imageKey = isDaytime ? 'rainMorning' : 'rainNight';
                break;
            case 'Thunderstorm':
                imageKey = isDaytime ? 'thunderstormMorning' : 'thunderstormNight';
                break;
            case 'Snow':
                imageKey = isDaytime ? 'snowMorning' : 'snowNight';
                break;
            case 'Mist':
                imageKey = isDaytime ? 'mistMorning' : 'mistNight';
                break;
            default:
                imageKey = isDaytime ? 'clearMorning' : 'clearNight';
                break;
        }

        return `url(${weatherConditionsImage[imageKey]})`;
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

            // Determine the background image based on the current weather
            const condition = currentData.weather[0].main;
            const localHour = new Date().getHours();
            const background = getBackgroundImage(condition, localHour);
            setBackgroundImage(background);
        } catch (error) {
            setError('Error fetching weather data');
        }
    }, []); // Empty dependency array means the function won't change unless the dependencies change.

    useEffect(() => {
        fetchData();
    }, [fetchData]); // fetchData is added as a dependency, so it will only re-run if fetchData changes.

    return (
        <WeatherDisplayContainer style={{ backgroundImage }} isDay={isDay}>
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
