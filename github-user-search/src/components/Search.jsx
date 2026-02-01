import { useState } from "react";
import { fetchUserData, searchUsersAdvanced } from "../services/githubService";
import UserCard from "./UserCard";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    try {
      const data = await fetchUserData(username);
      setSingleUser(data);
    } catch {
      setError("Looks like we cant find the user");
      setSingleUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSingleUser(null);
    try {
      const data = await searchUsersAdvanced({ username, location, minRepos });
      setUsers(data.items);
    } catch {
      setError("Error fetching advanced search results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>

      {/* Basic Search */}
      <form onSubmit={handleBasicSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search username..."
          className="flex-1 p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </form>

      {/* Advanced Search */}
      <form onSubmit={handleAdvancedSearch} className="grid md:grid-cols-3 gap-2 mb-6">
        <input
          type="text"
          placeholder="Location"
          className="p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min repos"
          className="p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Advanced Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {singleUser && <UserCard user={singleUser} />}

      <div className="grid md:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
