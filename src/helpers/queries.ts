import { gql } from "@/__generated__/gql";

export const USERNAME_EXIST = gql(`
  query Query($username: String!) {
    usernameExist(username: $username)
  }
`);

export const EMAIL_EXIST = gql(`
  query Query($email: EmailAddress!) {
    emailExist(email: $email)
  }
`);
