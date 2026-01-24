import { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map((recipe) => (
        <p key={recipe.id}>{recipe.title}</p>
      ))}
    </div>
  );
};

export default RecommendationsList;
