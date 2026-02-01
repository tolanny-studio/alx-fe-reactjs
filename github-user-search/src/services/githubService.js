import axios from "axios";

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// Basic user fetch
export const fetchUserData = async (username) => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });
  return data;
};

// Advanced search (UPDATED URL STYLE)
export const searchUsersAdvanced = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = `${username}+in:login`;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const { data } = await axios.get(
    `https://api.github.com/search/users?q=${query}&page=${page}`,
    {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  );

  return data;
};
