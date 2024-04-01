import axios from 'axios';
import { Dispatch } from 'redux';
import { setQuoteError, setQuote } from '../redux/quoteSlice';

const fetchRandomQuote = async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    dispatch(setQuote(response.data));
  } catch (error) {
    dispatch(setQuoteError('Error fetching random quote'));
  }
};

export { fetchRandomQuote };
