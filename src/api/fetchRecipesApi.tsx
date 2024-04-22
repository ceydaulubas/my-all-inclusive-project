import axios from 'axios';

const API_KEY = '300aad0f12534918b37c50f430ae98de';

const fetchRandomRecipesApi = async () => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching random recipes data');
  }
};

const fetchSearchRecipesApi = async (item: string,) => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/food/menuItems/search?apiKey=${API_KEY}&query=${item}&number=10`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching ${item} recipes data`);
  }
};

export { fetchRandomRecipesApi, fetchSearchRecipesApi  };
