import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

dotenv.config();
const app = express();
const server = new ApolloServer({ cors: true, typeDefs, resolvers });
server.applyMiddleware({ app });

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to MongoDB!")
);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server ready http://localhost:5000${server.graphqlPath}!!`)
);
