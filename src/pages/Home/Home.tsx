import React from 'react';
import {
    QuoteDisplay,
    WeatherDisplay,
    DailyNews,
    RecipesDisplay,
} from '../../components/index';
import { HomeContainer } from './Home.styles';

function Home() {
    return (
        <HomeContainer>
            <QuoteDisplay />
            <WeatherDisplay />
            <DailyNews />
            <RecipesDisplay />
        </HomeContainer>
    );
}

export default Home;
