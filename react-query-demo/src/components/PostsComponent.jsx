import { useQuery } from "react-query";

// fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts</p>;

  return (
    <div>
      <h2>Posts (React Query)</h2>

      {/* refetch button */}
      <button onClick={refetch}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;