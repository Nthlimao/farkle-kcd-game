import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import { getAuthToken } from "@/app/auth/session.ts";

const GRAPHQL_URI = import.meta.env.API_GRAPHQL_URL || "/graphql";

const authLink = new SetContextLink((prevContext) => {
  const token = getAuthToken();
  if (!token) return prevContext;

  return {
    headers: {
      ...prevContext.headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const httpLink = new HttpLink({
  uri: GRAPHQL_URI,
  credentials: "include",
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
