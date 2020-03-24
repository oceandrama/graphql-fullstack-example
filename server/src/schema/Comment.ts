import { objectType } from "nexus";

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.model.id();
    t.model.text();
    t.model.createdAt();
    t.model.author();
  }
});
