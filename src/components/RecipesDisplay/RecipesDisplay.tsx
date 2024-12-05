import React, { useEffect, useState } from 'react';
import { Slider } from 'react-styled-slider-component';
import useResponsiveSlides from '../../hooks/useResponsiveSlidesHook';

import { RecipesDisplayContainer , RecipeImage, RecipeTitle} from './RecipesDisplay.styles';

// Import Api
import { fetchRandomRecipesApi } from '../../api/index';

// Import the Spinner component
import { Spinner } from '../index';

interface Recipe {
    id: number;
    title: string;
    image: string;
    spoonacularSourceUrl: string;
}

const RecipesDisplay: React.FC = () => {
    const [randomRecipesData, setRandomRecipesData] = useState<Recipe[] | null>(null);
    const [error, setError] = useState<string>('');
    const visibleSlides = useResponsiveSlides();

    const perPage = 5; 
    const tag = '';    
    const offset = 0;   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRandomRecipesApi(tag, perPage, offset);
                console.log('data :>> ', data);
                setRandomRecipesData(data.recipes);
            } catch (error) {
                setError('Error fetching random recipes data');
            }
        };

        fetchData();
    }, [tag, perPage, offset]);

    const renderSlides = () => {
        if (!randomRecipesData || !randomRecipesData) return null;

        return randomRecipesData.map((recipe: Recipe) => (
            <div key={recipe.id} className="slide" >
                <RecipeImage src={recipe?.image} alt={recipe.title} onClick={() => window.open(`${recipe?.spoonacularSourceUrl}`, '_blank')}/>
                <RecipeTitle>{recipe.title}</RecipeTitle>
            </div>
        ));
    };

    return (
        <RecipesDisplayContainer>
            
            <h5>Recipes</h5>
            {error && <p>{error}</p>}
            {randomRecipesData ? (
                <Slider
                    visibleSlides={visibleSlides}
                    showDots={false}
                    showArrows={true}
                    dotsPosition="bottom"
                    slideStep={1}
                    direction="horizontal"
                    arrowStyle="filled"
                >
                    {renderSlides()}
                </Slider>
            ) : (
                <Spinner/>
            )}
         
        </RecipesDisplayContainer>
    );
};

export default RecipesDisplay;
