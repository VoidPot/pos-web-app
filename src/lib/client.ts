import { ApolloClient, HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/graphql`,
    }),
    name: "Soclif Stag",
    version: "1.0.0",
  });
});

export default getClient();
