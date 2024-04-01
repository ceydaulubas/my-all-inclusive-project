import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Weather {
  _id: string;
  content: string;
  author: string;
}

const WeatherApi: React.FC = () => {
    const [quote, setQuote] = useState<Weather | null>(null);

  useEffect(() => {
    const fetchweather = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data);
      } catch (error) {
        console.error('Error fetching random quote:', error);
      }
    };

    fetchweather();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Random Quote</h2>
      {quote ? (
        <div>
          <p>{quote.content}</p>
          <p>- {quote.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApi;
