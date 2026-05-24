export type AuthLoginInput = {
  username: string;
  password: string;
};

export type LoginMutationVariables = {
  input: AuthLoginInput;
};

export type LoginMutationData = {
  login: {
    token: string;
  };
};
