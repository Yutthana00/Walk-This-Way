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
          {posts?.length &&
            posts.map((post) => (
              <div key={post._id}>
                <div>Location: {post.location}</div>
                <div>Author: {post.author}</div>
                <div>Image: {post.image}</div>
                <div>Distance: {post.distance}</div>
                <div>Description: {post.description}</div>
                <div>URL: {post.website}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default GetPosts;
