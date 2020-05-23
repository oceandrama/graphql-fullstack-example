import { queryType } from "@nexus/schema";

export const Query = queryType({
  definition(t) {
    t.crud.comment();
    t.crud.comments({ filtering: true, ordering: true });
    t.crud.post();
    t.crud.posts({ filtering: true, ordering: true });
    t.crud.user();
    t.crud.users({ filtering: true, ordering: true });
    t.crud.vote();
    t.crud.votes({ filtering: true, ordering: true });
  },
});
