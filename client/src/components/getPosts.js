import React from "react";
import { useQuery } from "@apollo/client";

import { GET_POSTS } from "../utils/queries";

const GetPosts = () => {
  const { loading, data } = useQuery(GET_POSTS);
  const posts = data?.posts || [];
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {posts &&
            posts.map((post) => {
              <div>
                <div>{post.location}</div>
                <div>{post.image}</div>
                <div>{post.distance}</div>
                <div>{post.description}</div>
                <div>{post.website}</div>
              </div>;
            })}
        </div>
      )}
    </div>
  );
};

export default GetPosts;
