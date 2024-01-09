import { gql } from "../__generated__/gql";

export const LOGIN = gql(`
 mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      payload
    }
  }
`);

export const STORE_LOGIN = gql(`
 mutation StoreLogin($storeId: Int!) {
  storeLogin(storeId: $storeId) {
    payload
  }
}
`);
