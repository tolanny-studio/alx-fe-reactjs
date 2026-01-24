import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore();

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <p key={recipe.id}>{recipe.title}</p>
      ))}
    </div>
  );
};

export default FavoritesList;
