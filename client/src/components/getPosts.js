import { useQuery } from "@apollo/client";

import { GET_POSTS } from "../utils/queries";
import Card from "./card";

//get all posts to display on the dashboard via GetPosts component

const GetPosts = () => {
  const { loading, data } = useQuery(GET_POSTS, {
    pollInterval: 5000,
    fetchPolicy: "network-only",
  });
  const posts = data?.posts || [];
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  const reversedPosts = [...posts];
  reversedPosts.reverse();

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {reversedPosts.map((post) => (
            <Card post={post} key={post._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GetPosts;
