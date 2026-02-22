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
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 5, // data considered fresh for 5 mins
    cacheTime: 1000 * 60 * 10, // cache stays 10 mins after component unmounts ✅ required
    refetchOnWindowFocus: false, // prevents auto refetch on tab focus ✅ required
    keepPreviousData: true, // keeps old data while fetching new data ✅ required
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts (React Query)</h2>

      {/* manual refetch */}
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