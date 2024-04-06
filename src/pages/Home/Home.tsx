import React from 'react';
import QuoteDisplay from '../../components/QuoteDisplay/QuoteDisplay';
import './Home.scss';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';

function Home() {
  return (
    <div className="home">
<QuoteDisplay />
<WeatherDisplay />
    </div>


  );
}

export default Home;
