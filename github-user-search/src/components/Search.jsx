import { useState } from "react";
import { fetchUserData, searchUsersAdvanced } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

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

  const handleAdvancedSearch = async (e, loadMore = false) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSingleUser(null);

    try {
      const nextPage = loadMore ? page + 1 : 1;
      const data = await searchUsersAdvanced({
        username,
        location,
        minRepos,
        page: nextPage,
      });

      setUsers(loadMore ? [...users, ...data.items] : data.items);
      setPage(nextPage);
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
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {/* Advanced Search */}
      <form
        onSubmit={handleAdvancedSearch}
        className="grid md:grid-cols-3 gap-2 mb-6"
      >
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

      {/* Single User Result */}
      {singleUser && (
        <div className="border rounded p-4 shadow text-center">
          <img
            src={singleUser.avatar_url}
            alt={singleUser.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="text-xl font-semibold mt-2">{singleUser.login}</h2>

          {/* html_url USED HERE */}
          <a
            href={singleUser.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 block mt-2"
          >
            View GitHub Profile
          </a>
        </div>
      )}

      {/* Advanced Search Results */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div key={user.id} className="border rounded p-4 shadow text-center">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h2 className="text-lg font-semibold mt-2">{user.login}</h2>

            {/* html_url USED HERE TOO */}
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 block mt-2"
            >
              View GitHub Profile
            </a>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <div className="text-center mt-6">
          <button
            onClick={(e) => handleAdvancedSearch(e, true)}
            className="bg-purple-600 text-white px-6 py-2 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
