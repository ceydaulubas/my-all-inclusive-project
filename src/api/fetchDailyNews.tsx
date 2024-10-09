import axios from 'axios';

const API_KEY = process.env.REACT_APP_DAILY_NEWS_API_KEY;

const fetchDailyNews = async (countryCode: string) => {
    try {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw new Error('Error fetching current weather data');
    }
};

const fetchDailyNews2 = async () => {
    try {
        const response = await axios.get(
            `https://api.thenewsapi.com/v1/news/all?api_token=mIPOX9yYLEfZUBcLyOAzWniOugtexsCSnYVgXiCb&search=usd`
        );
        return response.data;
    } catch (error) {
        throw new Error('Error fetching current weather data');
    }
};

export { fetchDailyNews, fetchDailyNews2 };
