import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import { createContext } from "./context";

const server = new GraphQLServer({
  schema,
  context: createContext
});

server.start(
  {
    cors: {
      origin: "http://localhost:3000",
      credentials: true
    }
  },
  () => console.log(`🚀 Server ready at http://localhost:4000`)
);
