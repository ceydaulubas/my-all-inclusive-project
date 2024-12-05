import axios from 'axios';

const API_KEY = process.env.REACT_APP_RECIPES_API_KEY;
const fetchRandomRecipesApi = async (tag: string | null, perPage: number = 10, offset: number = 0) => {
    try {
        const url = tag 
            ? `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${perPage}&offset=${offset}&include-tags=${tag}` 
            : `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${perPage}&offset=${offset}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching random recipes data');
    }
};


export { fetchRandomRecipesApi };



