import React from 'react';
import {QuoteDisplay, WeatherDisplay, DailyNews} from '../../components/index';
import './Home.scss';

function Home() {
  return (
    <div className="home">
<QuoteDisplay />
<WeatherDisplay />
<DailyNews />
    </div>


  );
}

export default Home;
