import { objectType } from "@nexus/schema";

export const Vote = objectType({
  name: "Vote",
  definition(t) {
    t.model.author();
    t.model.post();
    t.model.direction();
  },
});
