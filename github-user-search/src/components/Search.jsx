import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="border p-2 flex-1 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      {user && (
        <div className="mt-6 p-4 border rounded text-center">
          <img src={user.avatar_url} alt="avatar" className="w-24 mx-auto rounded-full" />
          <h2 className="text-xl font-bold mt-2">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" className="text-blue-600">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
