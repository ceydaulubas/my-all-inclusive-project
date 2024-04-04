import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchRandomQuoteApi } from '../../api/fetchRandomQuoteApi';

import './QuoteDisplay.scss';

interface Quote {
  content: string;
  author: string;
}

const QuoteDisplay: React.FC = () => {
  const quote = useSelector<RootState, Quote | null>((state) => state.quote.quote);
  const error = useSelector((state: RootState) => state.quote.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await fetchRandomQuoteApi(dispatch);
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='quote-display-container'>
      <h2>Random Quote</h2>
      {error ? (
        <p>{error}</p>
      ) : quote ? (
        <div>
          <p>{quote.content}</p>
          <p>{quote.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuoteDisplay;
