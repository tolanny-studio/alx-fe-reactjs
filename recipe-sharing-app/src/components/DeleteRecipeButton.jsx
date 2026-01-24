import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        deleteRecipe(id);
        navigate("/");
      }}
    >
      🗑 Delete
    </button>
  );
};

export default DeleteRecipeButton;
