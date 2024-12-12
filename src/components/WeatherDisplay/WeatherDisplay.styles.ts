import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

export const WeatherDisplayContainer = styled.div<{ isDay: boolean }>`
    font-family: Arial, sans-serif;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: ${({ isDay }) => (isDay ? 'black' : 'white')}; 

`;
export const WeatherHeader = styled.h5`
    margin-left: 20px;
`;
export const CurrentWeatherDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;
`;
export const WeatherInfoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 1rem;
`;
export const WeatherIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CurrentWeatherIcon = styled.img`
    width: 80px;
    height: 80px;
`;

export const WeatherDescription = styled.p`
    margin-left: 15px;
`;

export const WeatherThreeHoursForecastContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;
`;

export const Weather2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 150px;
    border-radius: 30px;
    background-color: rgba(72, 72, 78, 0.413);
    margin: 5px;
`;

export const TempDetailContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
`;

export const WeatherForecasArrow = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 20px;
`;

export const WeatherDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const CurrentTemp = styled.p`
    font-weight: 500;
    font-size: 3rem;
    margin-top: 4.3rem;
`;

export const WeatherLocationIconContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const WeatherLocationIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-bottom: 2px;
`;

export const CurrentLocation = styled.p`
`;
