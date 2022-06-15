import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

const UserSetting = () => {
  const { loading, data } = useQuery(GET_ME);
  const user = data?.me || [];

  return (
    <>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>
              <div>Username: {user.username}</div>
              <div>Posts Count: {user.postCount}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserSetting;
