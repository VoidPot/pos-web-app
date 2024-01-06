import { gql } from "@/__generated__/gql";

export const GOOGLE_SIGN_IN = gql(`
  mutation GoogleSignIn($selectBy: String, $input: String!) {
    googleSignIn(selectBy: $selectBy, input: $input) {
      code
      message
      payload
      token
      redirect
    }
  }
`);

export const SIGN_UP = gql(`
  mutation SignUp(
    $email: EmailAddress!
    $password: String!
    $username: String!
  ) {
    signUp(email: $email, password: $password, username: $username) {
      code
      message
      payload
      token
      redirect
    }
  }
`);

export const LOGIN = gql(`
  mutation Login($email: EmailAddress!, $password: String!) {
    login(email: $email, password: $password) {
      code
      message
      payload
      token
      redirect
    }
  }
`);
