import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1> Welcome To The unnamed project homepage</h1>
    </ApolloProvider>
  );
}

export default App;
