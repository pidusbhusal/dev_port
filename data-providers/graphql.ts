import {ApolloClient, InMemoryCache} from '@apollo/client';
import { gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://192.168.1.64:1337/graphql',
    cache: new InMemoryCache(),
});

export {client, gql};