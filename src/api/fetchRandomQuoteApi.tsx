import axios from 'axios';
import { Dispatch } from 'redux';
import { setQuoteError, setQuote } from '../redux/quoteSlice';

const API_KEY = process.env.REACT_APP_RANDOM_QUOTE_API_KEY;

const fetchRandomQuoteApi = async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(
            `https://api.api-ninjas.com/v1/quotes?category=inspirational`,
            {
                headers: { 'X-Api-Key': API_KEY },
            }
        );
        dispatch(setQuote(response.data[0]));
    } catch (error) {
        console.error('Error: ', error);
        dispatch(setQuoteError('Error fetching random quote'));
    }
};

export { fetchRandomQuoteApi };
