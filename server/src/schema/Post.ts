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
  }
});
