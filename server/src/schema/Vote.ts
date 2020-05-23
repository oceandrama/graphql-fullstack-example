import { objectType } from "@nexus/schema";

export const Vote = objectType({
  name: "Vote",
  definition(t) {
    t.int("authorId");
    t.int("postId");
    t.field("direction", {
      type: "Direction",
    });
    t.field("author", {
      type: "User",
      nullable: true,
      resolve: ({ authorId }, _args, { prisma }) =>
        prisma.user.findOne({ where: { id: authorId } }),
    });
    t.field("post", {
      type: "Post",
      nullable: true,
      resolve: ({ postId }, _args, { prisma }) =>
        prisma.post.findOne({ where: { id: postId } }),
    });
  },
});
