import React from "react";
import { useQuery } from "@apollo/client";
import { SINGLE_USER_POSTS } from "../utils/queries";
import Card from "./card";

const GetUserPosts = () => {
  const { loading, data } = useQuery(SINGLE_USER_POSTS);
  const posts = data?.singleUserPosts || [];
  if (!posts.length) {
    return <h3>You have not created a post yet!</h3>;
  }
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {posts?.length &&
            posts.map((post) => <Card post={post} key={post._id} />).reverse()}
        </div>
      )}
    </div>
  );
};

export default GetUserPosts;
