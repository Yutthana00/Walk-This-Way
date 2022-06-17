import { createContext, useContext, useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { useAuthContext } from "./AuthProvider";
const UserContext = createContext();

const UserProvider = (props) => {
  const auth = useAuthContext();
  const alreadyLoggedIn = auth.loggedIn();

  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(alreadyLoggedIn);
  const [getMe, { loading, data, refetch }] = useLazyQuery(GET_ME);

  useEffect(() => {
    if (loggedIn && !user) {
      getMe();
    }
  }, [getMe, loggedIn, user]);

  const userData = data?.me || null;

  useEffect(() => {
    if (userData && !loading) {
      setUser(userData);
    }
  }, [loading, userData]);

  return (
    <UserContext.Provider
      value={{ refetchUser: refetch, user, loading, loggedIn, setLoggedIn }}
      {...props}
    />
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
