import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // ✅ Load recipe when component mounts
  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === Number(id)
    );

    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Recipe not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-4">
        {recipe.title}
      </h1>

      {/* Ingredients */}
      <div className="bg-gray-100 p-4 rounded-lg mt-6">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc ml-6 mt-2">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-gray-100 p-4 rounded-lg mt-6">
        <h2 className="text-xl font-semibold">Instructions</h2>
        <p className="mt-2">{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
