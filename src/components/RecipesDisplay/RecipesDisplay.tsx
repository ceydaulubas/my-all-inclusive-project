import React, { useEffect, useState } from 'react';
import { Slider } from 'react-styled-slider-component';
import useResponsiveSlides from '../../hooks/useResponsiveSlidesHook';

import { RecipesDisplayContainer } from './RecipesDisplay.styles';

// Import Api
import { fetchRandomRecipesApi } from '../../api/index';

interface Recipe {
    id: number;
    title: string;
    image: string;
}

const RecipesDisplay: React.FC = () => {
    const [randomRecipesData, setRandomRecipesData] = useState<Recipe[] | null>(null);
    const [error, setError] = useState<string>('');
    const visibleSlides = useResponsiveSlides();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRandomRecipesApi();
                setRandomRecipesData(data.recipes);
            } catch (error) {
                setError('Error fetching random recipes data');
            }
        };

        fetchData();
    }, []);

    const renderSlides = () => {
        if (!randomRecipesData || !randomRecipesData) return null;

        console.log('randomRecipesData', randomRecipesData);

        return randomRecipesData.map((recipe: Recipe) => (
            <div key={recipe.id}>
                <img
                    src={recipe?.image}
                    alt={recipe.title}
                    style={{ objectFit: 'fill', height: '300px', width: '300px' }}
                />
                <p>{recipe.title}</p>
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
                <Slider>
                    <div style={{ backgroundColor: 'red', height: '200px' }}>Slide 1</div>
                    <div style={{ backgroundColor: 'blue', height: '200px' }}>Slide 2</div>
                    <div style={{ backgroundColor: 'green', height: '200px' }}>Slide 3</div>
                    <div style={{ backgroundColor: 'yellow', height: '200px' }}>Slide 4</div>
                    <div style={{ backgroundColor: 'red', height: '200px' }}>Slide 5</div>
                    <div style={{ backgroundColor: 'blue', height: '200px' }}>Slide 6</div>
                    <div style={{ backgroundColor: 'green', height: '200px' }}>Slide 7</div>
                    <div style={{ backgroundColor: 'yellow', height: '200px' }}>Slide 8</div>
                </Slider>
            )}
        </RecipesDisplayContainer>
    );
};

export default RecipesDisplay;
