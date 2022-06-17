import React from "react";
import { useQuery } from "@apollo/client";

import { GET_POSTS } from "../utils/queries";

//get all posts to display on the dashboard via GetPosts component

const GetPosts = () => {
  const { loading, data } = useQuery(GET_POSTS, { pollInterval: 3000 });
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
            posts
              .map((post) => (
                <div key={post._id}>
                  <div>Location: {post.location}</div>
                  <div>Author: {post.author}</div>
                  <img
                    src={post.image}
                    style={{ height: 150, width: 150 }}
                    alt={`posted by ${post.author}`}
                  />
                  <div>Distance: {post.distance}</div>
                  <div>Description: {post.description}</div>
                  <div>URL: {post.website}</div>
                </div>
              ))
              .reverse()}
        </div>
      )}
    </div>
  );
};

export default GetPosts;
