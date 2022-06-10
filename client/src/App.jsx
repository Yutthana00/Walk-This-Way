import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import SignupForm from "./pages/signup";
import Home from "./pages/home";
import auth from "./utils/auth";
import Header from "./components/header";
import Footer from "./components/footer";
import LoginForm from "./pages/login";
import "./signUp.css";

// import LoginForm from "./pages/login";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  //uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
  <div className="App1">
    <ApolloProvider client={client}>
      <Header />
      {auth.loggedIn() ? (
        <Home />
        ) : (
          <div>
          {/* <SignupForm /> */}
          <LoginForm />
        </div>
      )}
      <Footer />
      
    </ApolloProvider>
  </div>  
  );
}

export default App;
