import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import User from "./page/user";

const erroLink = onError(({ graphqlErr, networkErr }) => {
  if (graphqlErr) {
    graphqlErr.map(({ msg, location, path }) => alert(`Graphql Error ${msg}`));
  }
});

const link = from([
  erroLink,
  new HttpLink({ uri: "https://graphqlzero.almansi.me/api" }),
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <User />
      </ApolloProvider>
    </>
  );
};

export default App;
