import {ApolloClient, InMemoryCache} from '@apollo/client';
import { gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://162.55.36.186:2770/graphql',
    // uri: process.env.BACKEND_URL,
    cache: new InMemoryCache(),
});

export {client, gql};