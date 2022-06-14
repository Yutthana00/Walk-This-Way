import { createContext, useContext } from "react";
import AuthService from "./AuthService";

const authContext = createContext();

const AuthProvider = (props) => {
  const auth = new AuthService();

  return <authContext.Provider value={auth} {...props} />;
};

export const useAuthContext = () => {
  return useContext(authContext);
};

export default AuthProvider;
