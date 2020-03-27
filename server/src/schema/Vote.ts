import { objectType } from "nexus";

export const Vote = objectType({
  name: "Vote",
  definition(t) {
    t.field("direction", {
      type: "Direction"
    });
  }
});
