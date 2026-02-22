import { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  // validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (formData.ingredients.split(",").length < 2) {
      newErrors.ingredients = "Add at least two ingredients";
    }

    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Recipe added successfully!");
      setFormData({ title: "", ingredients: "", steps: "" });
    }
  };

  return (
    // ✅ added md responsive utilities
    <div className="max-w-md md:max-w-lg mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl md:text-2xl font-bold mb-6">
        Add New Recipe
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 md:p-3 rounded-lg"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <textarea
            name="ingredients"
            placeholder="Ingredients (comma separated)"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full border p-2 md:p-3 rounded-lg"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <textarea
            name="steps"
            placeholder="Preparation Steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full border p-2 md:p-3 rounded-lg"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white px-6 py-2 md:py-3 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
