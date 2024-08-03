import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { format } from "date-fns";

// Import Api
import { fetchRandomRecipesApi } from "../../api/index";

import "./RecipesDisplay.scss";

interface RandomRecipesData {
  extendedIngredients: {
    id: number;
    image: string;
    originalName: string;
  }[];
}

const RecipesDisplay: React.FC = () => {
  const [randomRecipesData, setRandomRecipesData] = useState<RandomRecipesData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRandomRecipesApi();
        setRandomRecipesData(data.recipes[0]);
      } catch (error) {
        setError("Error fetching random recipes data");
      }
    };

    fetchData();
  }, []);

  const renderSlides = () => {
    if (!randomRecipesData || !randomRecipesData.extendedIngredients) return null;

    return randomRecipesData.extendedIngredients.map((ingredient) => (
      <div key={ingredient.id} className="slide">
        <img src={ingredient.image} alt={ingredient.originalName} />
        <p>{ingredient.originalName}</p>
      </div>
    ));
  };

  return (
    <div className="recipes-display-container">
      <h5>Recipes</h5>
      {error && <p>{error}</p>}
      {randomRecipesData && (
        <Carousel>
          {renderSlides()}
        </Carousel>
      )}
    </div>
  );
};

export default RecipesDisplay;
