import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PingResolver } from "./resolvers/Ping";
import { ProductResolver } from "./resolvers/Product";

export async function startServer() {
    const app = express();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, ProductResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    });

    server.applyMiddleware({ app, path: "/graphql" });

    return app;
};