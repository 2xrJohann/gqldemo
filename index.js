import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import typeDefs from "./schema/typedefs.js";
import resolvers from "./schema/resolvers.js";

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

server.listen().then( ({url}) => {
    console.log(`gql running @${url}`);
});