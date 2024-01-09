import { gql } from "../__generated__/gql";

export const STORE = gql(`
 query Store {
  store {
    id
    name
    deck
    slug
    email
    phone
    tables
    deleted
    deletedAt
    createdAt
    updatedAt
  }
}
`);

export const STORES = gql(`
 query Stores {
  stores {
    id
    name
    deck
    slug
    email
    phone
    tables
    deleted
    deletedAt
    createdAt
    updatedAt
  }
}
`);
