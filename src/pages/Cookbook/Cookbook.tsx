import { useEffect, useState } from 'react';
import { CookBookContainer, CardImage, CookbookContainerImage } from './Cookbook.style';
import { QuoteDisplay, RecipesSearchBar, RecipesFilter } from '../../components/index';

// Import Api
import { fetchRandomRecipesApi } from '../../api/index';
import { Card } from 'antd';
const { Meta } = Card;

interface CookbookProps {
    id: number;
    title: string;
    image: string;
}

interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        image: 'https://via.placeholder.com/150',
        price: '$10',
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'https://via.placeholder.com/150',
        price: '$20',
    },
    {
        id: 3,
        name: 'Product 3',
        image: 'https://via.placeholder.com/150',
        price: '$30',
    },
    {
        id: 4,
        name: 'Product 4',
        image: 'https://via.placeholder.com/150',
        price: '$40',
    },
    {
        id: 5,
        name: 'Product 5',
        image: 'https://via.placeholder.com/150',
        price: '$50',
    },
    {
        id: 6,
        name: 'Product 6',
        image: 'https://via.placeholder.com/150',
        price: '$60',
    },
    {
        id: 7,
        name: 'Product 7',
        image: 'https://via.placeholder.com/150',
        price: '$70',
    },
    {
        id: 8,
        name: 'Product 8',
        image: 'https://via.placeholder.com/150',
        price: '$80',
    },
    {
        id: 9,
        name: 'Product 9',
        image: 'https://via.placeholder.com/150',
        price: '$90',
    },
    {
        id: 10,
        name: 'Product 10',
        image: 'https://via.placeholder.com/150',
        price: '$100',
    },
];

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
        <div
            style={{
                backgroundColor: 'rgb(217, 217, 217)',
                margin: '0 -20px 0 -20px',
                height: '100vh',
            }}
        >
            <CookbookContainerImage>
                {' '}
                <RecipesSearchBar />
            </CookbookContainerImage>

            <div>
                <RecipesFilter />
            </div>
            <CookBookContainer>
                {/* <h1>Cookbook</h1> */}

                {products &&
                    products.map((recipe: Product) => (
                        <Card style={{ width: 300 }} key={recipe.id}>
                            <CardImage src={recipe.image} alt={recipe.name} />
                            <Meta title="Card title" description={recipe.name} />
                        </Card>
                    ))}
                {/* {recipes &&
                    recipes.map((recipe: CookbookProps) => (
                        <Card style={{ width: 300 }} key={recipe.id}>
                            <CardImage src={recipe.image} alt={recipe.title} />
                            <Meta title="Card title" description={recipe.title} />
                        </Card>
                    ))} */}
            </CookBookContainer>
        </div>
    );
};

export default Cookbook;
