import { queryType } from "@nexus/schema";

export const Query = queryType({
  definition(t) {
    t.crud.post();
    t.crud.posts({ filtering: true, ordering: true });
  }
});
