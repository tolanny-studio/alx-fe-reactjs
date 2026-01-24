import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <button onClick={() => addFavorite(recipe.id)}>⭐ Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;


  