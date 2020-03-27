import { objectType } from "@nexus/schema";

export const Vote = objectType({
  name: "Vote",
  definition(t) {
    t.field("direction", {
      type: "Direction"
    });
  }
});
