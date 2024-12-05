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
import { Card, Pagination } from 'antd';
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
    const [filter, setFilter] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalRecipes, setTotalRecipes] = useState<number>(0);
    const perPage = 30;

    console.log('filter :>> ', filter);

    const fetchRecipes = async (filter: string, query: string, page: number) => {
        try {
            const offset = (page - 1) * perPage;
            const tag = query ? query.toLowerCase() : filter === 'All' ? null : `${filter.toLowerCase()}`;
            const data = await fetchRandomRecipesApi(tag, perPage, offset);

            // If there's a search query, filter the recipes
            const filteredData = query
                ? data.recipes.filter((recipe: CookbookProps) =>
                      recipe.title.toLowerCase().includes(query.toLowerCase())
                  )
                : data.recipes;

            setRecipes(filteredData);
            setTotalRecipes(data.totalResults);
        } catch (error) {
            setError('Error fetching recipes');
        }
    };

    useEffect(() => {
        fetchRecipes(filter, searchQuery, currentPage);
    }, [filter, searchQuery, currentPage]);

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
        setSearchQuery('');
    }


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

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    console.log('totalRecipes :>> ', totalRecipes);
    console.log('perPage :>> ', perPage);
    console.log('currentPage :>> ', currentPage);

    return (
        <div
            style={{
                backgroundColor: 'rgb(217, 217, 217)',
                margin: '0 -20px 0 -20px',
                height: '100%',
            }}
        >
            <CookbookContainerImage>
                <RecipesSearchBar setSearchQuery={setSearchQuery} />
                <RecipesFilter setFilter={handleFilterChange} />
            </CookbookContainerImage>

            <CookBookContainer>
                {recipes  && recipes.length>0 ? (
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
                    )) ): "There are no recipes to display, please search different recipe"}
            </CookBookContainer>

            {totalRecipes > perPage && (
                <Pagination
                    current={currentPage}
                    total={totalRecipes}
                    pageSize={perPage}
                    onChange={handlePageChange}
                    style={{ textAlign: 'center', marginTop: '20px' }}
                />
            )}
        </div>
    );
};

export default Cookbook;
