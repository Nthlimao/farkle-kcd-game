export { gql } from "@apollo/client";

export { apolloClient } from "./client.ts";
export { default as GraphQLProvider } from "./provider.graphql.tsx";

export {
  useApolloClient,
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client/react";
