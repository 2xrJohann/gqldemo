import { gql } from "apollo-server";

const typeDefs = gql`

    type User {
        id: ID!
        username: String!
        attendanceRating: Int!
        chatScore: Int!
    }

    input createUserInput {
        username: String!
        chatScore: Int!
        attendanceRating: Int!
    }

    type Query {
        getUsers: [User!]!
        getUser(name: String!): User!
    }

    type Mutation {
        createUser(input: createUserInput!): User
        deleteUser(input: ID!): User!
    }
`;

export default typeDefs;