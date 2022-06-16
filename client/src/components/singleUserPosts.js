import React from "react";
import { useQuery } from "@apollo/client";
import { SINGLE_USER_POSTS } from "../utils/queries";
//import { useAuthContext } from "../utils/AuthProvider";

const GetUserPosts = () => {
  //const auth = useAuthContext();
  const { loading, data } = useQuery(SINGLE_USER_POSTS);
  const posts = data?.singleUserPosts || [];
  if (!posts.length) {
    return <h3>You have not created a post yet! Why not create one here</h3>;
  }
  return (
    <div>
      {" "}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {posts?.length &&
            posts.map((post) => (
              <div key={post._id}>
                <div>Location: {post.location}</div>
                <img
                  alt="here's what you've posted!"
                  src={post.image}
                  style={{ height: 150, width: 150 }}
                />
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

export default GetUserPosts;
