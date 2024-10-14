import axios from 'axios';

const API_KEY = process.env.REACT_APP_RECIPES_API_KEY;

const fetchRandomRecipesApi = async () => {
    try {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&include-tags=dessert&number=30`
        );
        return response.data;
    } catch (error) {
        throw new Error('Error fetching random recipes data');
    }
};

const fetchSearchRecipesApi = async (item: string) => {
    try {
        const response = await axios.get(
            `https://api.spoonacular.com/food/menuItems/search?apiKey=${API_KEY}&query=${item}&number=10`
        );
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching ${item} recipes data`);
    }
};

export { fetchRandomRecipesApi, fetchSearchRecipesApi };
