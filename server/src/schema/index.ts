import { makeSchema } from "nexus";
import { nexusPrismaPlugin } from "nexus-prisma";
import * as path from "path";
import * as Post from "./Post";
import * as Query from "./Query";
import * as Comment from "./Comment";
import * as User from "./User";

export default makeSchema({
  types: [Query, Post, User, Comment],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: path.join(
      __dirname,
      "../../node_modules/@types/nexus-typegen/index.d.ts"
    )
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma"
      },
      {
        source: require.resolve("../context"),
        alias: "Context"
      }
    ]
  }
});
