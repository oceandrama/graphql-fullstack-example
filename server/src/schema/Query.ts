import { queryType } from "nexus";

export const Query = queryType({
  definition(t) {
    t.crud.post();
    t.crud.posts({ filtering: true, ordering: true });
  }
});
