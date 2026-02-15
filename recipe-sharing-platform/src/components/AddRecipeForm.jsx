import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Add at least two ingredients");
      return;
    }

    setError("");
    alert("Recipe added successfully!");

    // reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Add New Recipe
      </h1>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Preparation Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
