import React, { useEffect, useState } from "react";
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
        setRandomRecipesData(data);
        console.log(data);
      } catch (error) {
        setError("Error fetching random recipes data");
      }
    };

    fetchData();
  }, []);


  return (
    <div className="recipes-display-container">
      <h5>Recipes </h5>

    </div>
  );
};

export default RecipesDisplay;
