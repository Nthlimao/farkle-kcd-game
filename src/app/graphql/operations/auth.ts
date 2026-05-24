import { gql, type TypedDocumentNode } from "@apollo/client";

import type {
  LoginMutationData,
  LoginMutationVariables,
} from "@/shared/types/auth";

export const LOGIN_MUTATION: TypedDocumentNode<
  LoginMutationData,
  LoginMutationVariables
> = gql`
  mutation Login($input: AuthLoginInput!) {
    login(input: $input) {
      token
    }
  }
`;
