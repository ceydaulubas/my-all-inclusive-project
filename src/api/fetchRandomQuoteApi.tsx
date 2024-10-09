import axios from 'axios';

// Redux
import { Dispatch } from 'redux';
import { setQuoteError, setQuote } from '../redux/quoteSlice';

const API_KEY = process.env.REACT_APP_RANDOM_QUOTE_API_KEY;

// Fallback quote for API failure or empty response
const fallbackQuote = {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
};

const fetchRandomQuoteApi = async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(
            `https://api.api-ninjas.com/v1/quotes?category=inspirational`,
            {
                headers: { 'X-Api-Key': API_KEY },
            }
        );
        if (response.status === 200 && response.data.length > 0) {
            dispatch(setQuote(response.data[0]));
        } else {
            dispatch(setQuote(fallbackQuote));
        }
    } catch (error) {
        console.error('Error: ', error);
        dispatch(setQuoteError('Error fetching random quote'));
    }
};

export { fetchRandomQuoteApi };
