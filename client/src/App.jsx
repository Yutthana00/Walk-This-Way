// Imported Dependencies
import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

// Imported Pages, Components or CSS
import AuthProvider from "./utils/AuthProvider";
import Header from "./components/header";
import Home from "./pages/home";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import AboutUs from "./pages/aboutUs";
import FAQ from "./pages/FAQ";
import PostForm from "./components/createPost";
import Dashboard from "./pages/dashboard";
import Footer from "./components/footer";
import Error from "./pages/404";
import UserProvider from "./utils/UserProvider";
// import Footer from "./components/footer";

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
    <ApolloProvider client={client}>
      <ChakraProvider>
        <AuthProvider>
          <UserProvider>
            {/*Wrap all page elemets in Router Component to keep track of location state*/}
            <Router>
              {/* Routes Component can only have Route Components within it!! */}
              <Header />
              <Routes>
                <Route path="/login" element={<LoginForm />}></Route>
                <Route path="/signup" element={<SignupForm />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/createPost" element={<PostForm />}></Route>
                <Route path="/AboutUs" element={<AboutUs />}></Route>
                <Route path="/FAQ" element={<FAQ />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/404" element={<Error />}></Route>
              </Routes>
              <Footer />
            </Router>
          </UserProvider>
        </AuthProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
