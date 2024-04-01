import React from 'react';
import WeatherApi from '../../api/weatherApi';
import QuoteDisplay from '../../components/QuoteDisplay/QuoteDisplay';
import './Home.scss';

function Home() {
  return (
    <div className="home">
<QuoteDisplay />
<WeatherApi />
<QuoteDisplay />
<WeatherApi />
    </div>


  );
}

export default Home;
