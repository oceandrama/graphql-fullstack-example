import { objectType } from "@nexus/schema";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.text();
    t.model.createdAt();
    t.model.author();
    t.model.comments();
    t.model.votes();
    t.field("rating", {
      type: "Int",
      resolve: async ({ id }, _args, { prisma }) => {
        const votes = await prisma.vote.findMany({
          where: {
            post: {
              id
            }
          }
        });

        return votes.reduce((rating, vote) => {
          switch (vote.direction) {
            case "UP":
              return (rating += 1);
            case "DOWN":
              return (rating -= 1);
          }
        }, 0);
      }
    });
  }
});
