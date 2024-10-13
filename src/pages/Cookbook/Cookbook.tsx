import { useEffect, useState } from 'react';
import { CookBookContainer, CardImage } from './Cookbook.style';
import { QuoteDisplay } from '../../components/index';

// Import Api
import { fetchRandomRecipesApi } from '../../api/index';
import { Card } from 'antd';
const { Meta } = Card;

interface CookbookProps {
    id: number;
    title: string;
    image: string;
}

const Cookbook = () => {
    const [recipes, setRecipes] = useState<CookbookProps[] | null>(null);
    const [error, setError] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<CookbookProps[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRandomRecipesApi();
                setRecipes(data.recipes);
            } catch (error) {
                setError('Error fetching random recipes data');
            }
        };
        fetchData();
    }, []);

    console.log('recipes', recipes);

    return (
        <CookBookContainer>
            {/* <h1>Cookbook</h1> */}
            {recipes &&
                recipes.map((recipe: CookbookProps) => (
                    <Card style={{ width: 300 }} key={recipe.id}>
                        <CardImage src={recipe.image} alt={recipe.title} />
                        <Meta title="Card title" description={recipe.title} />
                    </Card>
                ))}
        </CookBookContainer>
    );
};

export default Cookbook;
