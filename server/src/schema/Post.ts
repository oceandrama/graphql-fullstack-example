import { objectType } from "nexus";

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
