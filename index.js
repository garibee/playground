import {GraphQLServer} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers // resolvers : resolvers 축약
});
server.start(()=>console.log("graphQLServer started")) ;