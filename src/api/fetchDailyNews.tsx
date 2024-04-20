import axios from 'axios';

const API_KEY = '8e182be434f04bd0895f076d01fea0fd';

const fetchDailyNews = async (countryCode:string) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching current weather data');
  }
};

export { fetchDailyNews };
