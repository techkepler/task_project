import { gql } from "@apollo/client";

export const load_user = gql`
  query {
    users {
      data {
        id
        name
        username
        email
        address {
          street
        }
        phone
        website
      }
    }
  }
`;
