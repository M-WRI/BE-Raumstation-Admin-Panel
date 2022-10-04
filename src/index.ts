import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { getSchema } from "./graphql/schema";
import dotenv from "dotenv";

dotenv.config();

// ======
// SERVER
// ======
const main = async () => {
  const app: Express = express();

  const schema = getSchema();
  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
