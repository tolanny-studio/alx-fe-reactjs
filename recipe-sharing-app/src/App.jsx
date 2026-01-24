import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import { useRecipeStore } from "./components/recipeStore";
function App() {
  return (
    <>
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

export default App;
