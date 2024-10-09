import React, { useEffect, useState } from 'react';
import { Slider } from 'react-styled-slider-component';
import styled from 'styled-components';

// Import Api
import { fetchRandomRecipesApi } from '../../api/index';

// Styled Components
const RecipesDisplayContainer = styled.div`
    background-color: rgb(248, 243, 243);

    h5 {
        margin-left: 20px;
    }
`;

const Slide = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers the content horizontally */
    justify-content: center; /* Centers the content vertically */
    height: 150px; /* Set a fixed height for the slide */

    img {
        width: 200px; /* Adjust the image size as needed */
        height: 500px; /* Ensure the aspect ratio of the image is preserved */
    }

    p {
        margin-top: 10px; /* Space between image and text */
        font-size: 16px; /* Adjust the font size */
        padding-bottom: 90px;
    }
`;

interface Recipe {
    id: number;
    title: string;
    image: string;
}

const RecipesDisplay: React.FC = () => {
    const [randomRecipesData, setRandomRecipesData] = useState<Recipe[] | null>(null);
    const [error, setError] = useState<string>('');

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
            <Slide key={recipe.id}>
                <img src={recipe?.image} alt={recipe.title} />
                <p>{recipe.title}</p>
            </Slide>
        ));
    };

    return (
        <RecipesDisplayContainer>
            <h5>Recipes</h5>
            {error && <p>{error}</p>}
            {randomRecipesData && (
                <Slider
                    visibleSlides={3}
                    showDots={true}
                    showArrows={true}
                    dotsPosition="bottom"
                    slideStep={1}
                    direction="horizontal"
                    arrowStyle="filled"
                >
                    {renderSlides()}
                </Slider>
            )}
        </RecipesDisplayContainer>
    );
};

export default RecipesDisplay;
