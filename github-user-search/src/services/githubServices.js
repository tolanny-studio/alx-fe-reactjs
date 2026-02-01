import axios from "axios";

const API = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

// Basic user fetch
export const fetchUserData = async (username) => {
  const { data } = await API.get(`/users/${username}`);
  return data;
};

// Advanced search
export const searchUsersAdvanced = async ({ username, location, minRepos, page = 1 }) => {
  let query = `${username}+in:login`;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const { data } = await API.get(`/search/users?q=${query}&page=${page}`);
  return data;
};
