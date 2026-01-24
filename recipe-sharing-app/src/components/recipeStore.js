import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  searchTerm: "",
  filteredRecipes: [],
  recommendations: [],

  // 🟢 ADD
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  // 🔵 DELETE
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // 🟡 UPDATE
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // 🔍 SEARCH
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // ⭐ FAVORITES
  addFavorite: (id) =>
    set((state) => ({ favorites: [...state.favorites, id] })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // 🤖 RECOMMENDATIONS (simple mock logic)
  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && Math.random() > 0.6
      ),
    })),
}));
