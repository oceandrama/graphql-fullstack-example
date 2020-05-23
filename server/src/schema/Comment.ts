import { objectType } from "@nexus/schema";

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.model.id();
    t.model.text();
    t.model.createdAt();

    t.model.author();
    t.model.post();
  },
});
