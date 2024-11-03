import { useEffect, useState } from 'react';
import { RecipesSearchBar, RecipesFilter } from '../../components/index';

// Import Api
import { fetchRandomRecipesApi } from '../../api/index';

// Import Icons
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { glutenFree, vegetarian, vegan } from '../../assets/index';

// Import Styled Component
import {
    CookBookContainer,
    CookbookCard,
    CardImage,
    CookbookContainerImage,
    ImageWrapper,
} from './Cookbook.style';

// Import Ant design
import { Card } from 'antd';
const { Meta } = Card;

interface CookbookProps {
    id: number;
    title: string;
    image: string;
    vegan: boolean;
    vegetarian: boolean;
    instructions: string;
    sourceUrl: string;
    glutenFree: boolean;
    summary: string;
}

const Cookbook = () => {
    const [recipes, setRecipes] = useState<CookbookProps[] | null>(null);
    const [error, setError] = useState<string>('');
    const [favorites, setFavorites] = useState<number[]>([]);

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

    const stripHtml = (html: string) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    const truncateText = (text: string, wordLimit: number) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    const toggleFavorite = (id: number) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(id)
                ? prevFavorites.filter((favId) => favId !== id)
                : [...prevFavorites, id]
        );
    };

    const handleRedirect = (url: string) => {
        window.location.href = url;
    };

    return (
        <div
            style={{
                backgroundColor: 'rgb(217, 217, 217)',
                margin: '0 -20px 0 -20px',
                height: '100%',
            }}
        >
            <CookbookContainerImage>
                {' '}
                <RecipesSearchBar />
                <RecipesFilter />
            </CookbookContainerImage>

            <CookBookContainer>
                {recipes &&
                    recipes.map((recipe: CookbookProps) => (
                        <CookbookCard
                            key={recipe.id}
                            cover={
                                <ImageWrapper>
                                    <CardImage
                                        src={recipe.image}
                                        alt={recipe.title}
                                        onClick={() => handleRedirect(recipe.sourceUrl)}
                                    />
                                </ImageWrapper>
                            }
                            extra={
                                favorites.includes(recipe.id) ? (
                                    <HeartFilled
                                        style={{ color: 'red', fontSize: 20 }}
                                        onClick={() => toggleFavorite(recipe.id)}
                                    />
                                ) : (
                                    <HeartOutlined
                                        style={{ color: 'red', fontSize: 20 }}
                                        onClick={() => toggleFavorite(recipe.id)}
                                    />
                                )
                            }
                            actions={[
                                recipe.vegetarian ? (
                                    <img style={{ width: 40 }} src={vegetarian} alt={vegetarian} />
                                ) : null,
                                recipe.vegan ? (
                                    <img style={{ width: 40 }} src={vegan} alt={vegan} />
                                ) : null,
                                recipe.glutenFree ? (
                                    <img style={{ width: 40 }} src={glutenFree} alt={glutenFree} />
                                ) : null,
                            ]}
                        >
                            <Meta
                                title={recipe.title}
                                description={truncateText(stripHtml(recipe.instructions), 10)}
                            />
                        </CookbookCard>
                    ))}
            </CookBookContainer>
        </div>
    );
};

export default Cookbook;
