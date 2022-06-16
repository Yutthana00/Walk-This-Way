import { useQuery } from "@apollo/client";

import { GET_POSTS } from "../utils/queries";
import Card from "./card";

const GetPosts = () => {
  const { loading, data } = useQuery(GET_POSTS);
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
