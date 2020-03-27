import { makeSchema } from "nexus";
import { nexusPrismaPlugin } from "nexus-prisma";
import * as path from "path";
import * as Comment from "./Comment";
import * as Mutation from "./Mutation";
import * as Post from "./Post";
import * as Query from "./Query";
import * as User from "./User";
import * as Vote from "./Vote";

export default makeSchema({
  types: [Query, Mutation, Post, User, Comment, Vote],
  plugins: [
    nexusPrismaPlugin({
      computedInputs: {
        author: ({ ctx: { user } }) => {
          if (!user) {
            throw new Error("Вы не авторизованы");
          }

          return {
            connect: {
              id: user.id
            }
          };
        }
      }
    })
  ],
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
