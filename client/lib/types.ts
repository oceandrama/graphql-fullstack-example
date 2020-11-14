import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type Query = {
  __typename?: "Query";
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};

export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type QueryCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<CommentWhereUniqueInput>;
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<PostWhereUniqueInput>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<UserWhereUniqueInput>;
};

export type QueryVoteArgs = {
  where: VoteWhereUniqueInput;
};

export type QueryVotesArgs = {
  where?: Maybe<VoteWhereInput>;
  orderBy?: Maybe<Array<VoteOrderByInput>>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<VoteWhereUniqueInput>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
};

export type Comment = {
  __typename?: "Comment";
  id: Scalars["Int"];
  text: Scalars["String"];
  createdAt: Scalars["DateTime"];
  author: User;
  post: Post;
};

export type User = {
  __typename?: "User";
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  comments: Array<Comment>;
  posts: Array<Post>;
  votes: Array<Vote>;
};

export type UserCommentsArgs = {
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<CommentWhereUniqueInput>;
};

export type UserPostsArgs = {
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<PostWhereUniqueInput>;
};

export type UserVotesArgs = {
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<VoteWhereUniqueInput>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
};

export type Post = {
  __typename?: "Post";
  id: Scalars["Int"];
  title: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  author: User;
  comments: Array<Comment>;
  votes: Array<Vote>;
  rating?: Maybe<Scalars["Int"]>;
};

export type PostCommentsArgs = {
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<CommentWhereUniqueInput>;
};

export type PostVotesArgs = {
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  cursor?: Maybe<VoteWhereUniqueInput>;
};

export type VoteWhereUniqueInput = {
  authorId_postId?: Maybe<AuthorIdPostIdCompoundUniqueInput>;
};

export type AuthorIdPostIdCompoundUniqueInput = {
  authorId: Scalars["Int"];
  postId: Scalars["Int"];
};

export type Vote = {
  __typename?: "Vote";
  authorId?: Maybe<Scalars["Int"]>;
  postId?: Maybe<Scalars["Int"]>;
  direction?: Maybe<Direction>;
  author?: Maybe<User>;
  post?: Maybe<Post>;
};

export enum Direction {
  Up = "UP",
  Down = "DOWN",
}

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  text?: Maybe<StringFilter>;
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  replyToId?: Maybe<IntNullableFilter>;
  post?: Maybe<PostWhereInput>;
  replyTo?: Maybe<CommentWhereInput>;
  replies?: Maybe<CommentListRelationFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  text?: Maybe<StringNullableFilter>;
  authorId?: Maybe<IntFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  votes?: Maybe<VoteListRelationFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type VoteListRelationFilter = {
  every?: Maybe<VoteWhereInput>;
  some?: Maybe<VoteWhereInput>;
  none?: Maybe<VoteWhereInput>;
};

export type VoteWhereInput = {
  AND?: Maybe<Array<VoteWhereInput>>;
  OR?: Maybe<Array<VoteWhereInput>>;
  NOT?: Maybe<Array<VoteWhereInput>>;
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  direction?: Maybe<EnumDirectionFilter>;
  post?: Maybe<PostWhereInput>;
};

export type EnumDirectionFilter = {
  equals?: Maybe<Direction>;
  in?: Maybe<Array<Direction>>;
  notIn?: Maybe<Array<Direction>>;
  not?: Maybe<NestedEnumDirectionFilter>;
};

export type NestedEnumDirectionFilter = {
  equals?: Maybe<Direction>;
  in?: Maybe<Array<Direction>>;
  notIn?: Maybe<Array<Direction>>;
  not?: Maybe<NestedEnumDirectionFilter>;
};

export type CommentOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  replyToId?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  votes?: Maybe<VoteListRelationFilter>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type VoteOrderByInput = {
  authorId?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  direction?: Maybe<SortOrder>;
};

export type Mutation = {
  __typename?: "Mutation";
  login?: Maybe<User>;
  createOnePost: Post;
  updateOnePost?: Maybe<Post>;
  deleteOnePost?: Maybe<Post>;
  createOneComment: Comment;
  updateOneComment?: Maybe<Comment>;
  deleteOneComment?: Maybe<Comment>;
  createOneVote: Vote;
  updateOneVote?: Maybe<Vote>;
  deleteOneVote?: Maybe<Vote>;
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};

export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};

export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type MutationCreateOneVoteArgs = {
  data: VoteCreateInput;
};

export type MutationUpdateOneVoteArgs = {
  data: VoteUpdateInput;
  where: VoteWhereUniqueInput;
};

export type MutationDeleteOneVoteArgs = {
  where: VoteWhereUniqueInput;
};

export type PostCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  votes?: Maybe<VoteCreateManyWithoutPostInput>;
};

export type CommentCreateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutpostInput>>;
};

export type CommentCreateWithoutPostInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text: Scalars["String"];
  replyTo?: Maybe<CommentCreateOneWithoutRepliesInput>;
  replies?: Maybe<CommentCreateManyWithoutReplyToInput>;
};

export type CommentCreateOneWithoutRepliesInput = {
  create?: Maybe<CommentCreateWithoutRepliesInput>;
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutrepliesInput>;
};

export type CommentCreateWithoutRepliesInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text: Scalars["String"];
  post: PostCreateOneWithoutCommentsInput;
  replyTo?: Maybe<CommentCreateOneWithoutRepliesInput>;
};

export type PostCreateOneWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
};

export type PostCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  votes?: Maybe<VoteCreateManyWithoutPostInput>;
};

export type VoteCreateManyWithoutPostInput = {
  create?: Maybe<Array<VoteCreateWithoutPostInput>>;
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<VoteCreateOrConnectWithoutpostInput>>;
};

export type VoteCreateWithoutPostInput = {
  direction: Direction;
};

export type VoteCreateOrConnectWithoutpostInput = {
  where: VoteWhereUniqueInput;
  create: VoteCreateWithoutPostInput;
};

export type PostCreateOrConnectWithoutcommentsInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutCommentsInput;
};

export type CommentCreateOrConnectWithoutrepliesInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutRepliesInput;
};

export type CommentCreateManyWithoutReplyToInput = {
  create?: Maybe<Array<CommentCreateWithoutReplyToInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutreplyToInput>>;
};

export type CommentCreateWithoutReplyToInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text: Scalars["String"];
  post: PostCreateOneWithoutCommentsInput;
  replies?: Maybe<CommentCreateManyWithoutReplyToInput>;
};

export type CommentCreateOrConnectWithoutreplyToInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutReplyToInput;
};

export type CommentCreateOrConnectWithoutpostInput = {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutPostInput;
};

export type PostUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  votes?: Maybe<VoteUpdateManyWithoutPostInput>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["DateTime"]>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["String"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["String"]>;
};

export type CommentUpdateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutpostInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostInput;
};

export type CommentUpdateWithoutPostInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  replyTo?: Maybe<CommentUpdateOneWithoutRepliesInput>;
  replies?: Maybe<CommentUpdateManyWithoutReplyToInput>;
};

export type CommentUpdateOneWithoutRepliesInput = {
  create?: Maybe<CommentCreateWithoutRepliesInput>;
  connect?: Maybe<CommentWhereUniqueInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  delete?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<CommentUpdateWithoutRepliesInput>;
  upsert?: Maybe<CommentUpsertWithoutRepliesInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutrepliesInput>;
};

export type CommentUpdateWithoutRepliesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  replyTo?: Maybe<CommentUpdateOneWithoutRepliesInput>;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
};

export type PostUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  votes?: Maybe<VoteUpdateManyWithoutPostInput>;
};

export type VoteUpdateManyWithoutPostInput = {
  create?: Maybe<Array<VoteCreateWithoutPostInput>>;
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  set?: Maybe<Array<VoteWhereUniqueInput>>;
  disconnect?: Maybe<Array<VoteWhereUniqueInput>>;
  delete?: Maybe<Array<VoteWhereUniqueInput>>;
  update?: Maybe<Array<VoteUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<VoteUpdateManyWithWhereWithoutPostInput>>;
  deleteMany?: Maybe<Array<VoteScalarWhereInput>>;
  upsert?: Maybe<Array<VoteUpsertWithWhereUniqueWithoutPostInput>>;
  connectOrCreate?: Maybe<Array<VoteCreateOrConnectWithoutpostInput>>;
};

export type VoteUpdateWithWhereUniqueWithoutPostInput = {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutPostInput;
};

export type VoteUpdateWithoutPostInput = {
  direction?: Maybe<EnumDirectionFieldUpdateOperationsInput>;
};

export type EnumDirectionFieldUpdateOperationsInput = {
  set?: Maybe<Direction>;
};

export type VoteUpdateManyWithWhereWithoutPostInput = {
  where: VoteScalarWhereInput;
  data: VoteUpdateManyMutationInput;
};

export type VoteScalarWhereInput = {
  AND?: Maybe<Array<VoteScalarWhereInput>>;
  OR?: Maybe<Array<VoteScalarWhereInput>>;
  NOT?: Maybe<Array<VoteScalarWhereInput>>;
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  direction?: Maybe<EnumDirectionFilter>;
};

export type VoteUpdateManyMutationInput = {
  direction?: Maybe<EnumDirectionFieldUpdateOperationsInput>;
};

export type VoteUpsertWithWhereUniqueWithoutPostInput = {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutPostInput;
  create: VoteCreateWithoutPostInput;
};

export type PostUpsertWithoutCommentsInput = {
  update: PostUpdateWithoutCommentsInput;
  create: PostCreateWithoutCommentsInput;
};

export type CommentUpsertWithoutRepliesInput = {
  update: CommentUpdateWithoutRepliesInput;
  create: CommentCreateWithoutRepliesInput;
};

export type CommentUpdateManyWithoutReplyToInput = {
  create?: Maybe<Array<CommentCreateWithoutReplyToInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutReplyToInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutReplyToInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutReplyToInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutreplyToInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutReplyToInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutReplyToInput;
};

export type CommentUpdateWithoutReplyToInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  replies?: Maybe<CommentUpdateManyWithoutReplyToInput>;
};

export type CommentUpdateManyWithWhereWithoutReplyToInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyMutationInput;
};

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  text?: Maybe<StringFilter>;
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  replyToId?: Maybe<IntNullableFilter>;
};

export type CommentUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutReplyToInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutReplyToInput;
  create: CommentCreateWithoutReplyToInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyMutationInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostInput;
  create: CommentCreateWithoutPostInput;
};

export type CommentCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text: Scalars["String"];
  post: PostCreateOneWithoutCommentsInput;
  replyTo?: Maybe<CommentCreateOneWithoutRepliesInput>;
  replies?: Maybe<CommentCreateManyWithoutReplyToInput>;
};

export type CommentUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  replyTo?: Maybe<CommentUpdateOneWithoutRepliesInput>;
  replies?: Maybe<CommentUpdateManyWithoutReplyToInput>;
};

export type VoteCreateInput = {
  direction: Direction;
  post: PostCreateOneWithoutVotesInput;
};

export type PostCreateOneWithoutVotesInput = {
  create?: Maybe<PostCreateWithoutVotesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutvotesInput>;
};

export type PostCreateWithoutVotesInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type PostCreateOrConnectWithoutvotesInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutVotesInput;
};

export type VoteUpdateInput = {
  direction?: Maybe<EnumDirectionFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutVotesInput>;
};

export type PostUpdateOneRequiredWithoutVotesInput = {
  create?: Maybe<PostCreateWithoutVotesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutVotesInput>;
  upsert?: Maybe<PostUpsertWithoutVotesInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutvotesInput>;
};

export type PostUpdateWithoutVotesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpsertWithoutVotesInput = {
  update: PostUpdateWithoutVotesInput;
  create: PostCreateWithoutVotesInput;
};

export type AuthorAvatarFragment = { __typename?: "User" } & Pick<
  User,
  "id" | "name"
>;

export type CommentOnCardFragment = { __typename?: "Comment" } & Pick<
  Comment,
  "id" | "text"
> & {
    author: { __typename?: "User" } & Pick<User, "id" | "name"> &
      AuthorAvatarFragment;
  };

export type PostOnCardFragment = { __typename?: "Post" } & Pick<
  Post,
  "id" | "title" | "text" | "createdAt" | "rating"
> & { author: { __typename?: "User" } & AuthorAvatarFragment };

export type CreatePostMutationVariables = Exact<{
  data: PostCreateInput;
}>;

export type CreatePostMutation = { __typename?: "Mutation" } & {
  createOnePost: { __typename?: "Post" } & PostOnCardFragment;
};

export type GetPostQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetPostQuery = { __typename?: "Query" } & {
  post?: Maybe<
    { __typename?: "Post" } & {
      comments: Array<{ __typename?: "Comment" } & CommentOnCardFragment>;
    } & PostOnCardFragment
  >;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPostsQuery = { __typename?: "Query" } & {
  posts: Array<{ __typename?: "Post" } & PostOnCardFragment>;
};

export const AuthorAvatarFragmentDoc = gql`
  fragment AuthorAvatar on User {
    id
    name
  }
`;
export const CommentOnCardFragmentDoc = gql`
  fragment CommentOnCard on Comment {
    id
    text
    author {
      id
      name
      ...AuthorAvatar
    }
  }
  ${AuthorAvatarFragmentDoc}
`;
export const PostOnCardFragmentDoc = gql`
  fragment PostOnCard on Post {
    id
    title
    text
    createdAt
    rating
    author {
      ...AuthorAvatar
    }
  }
  ${AuthorAvatarFragmentDoc}
`;
export const CreatePostDocument = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createOnePost(data: $data) {
      ...PostOnCard
    }
  }
  ${PostOnCardFragmentDoc}
`;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    baseOptions
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export const GetPostDocument = gql`
  query GetPost($id: Int!) {
    post(where: { id: $id }) {
      ...PostOnCard
      comments {
        ...CommentOnCard
      }
    }
  }
  ${PostOnCardFragmentDoc}
  ${CommentOnCardFragmentDoc}
`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  );
}
export function useGetPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  );
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export const GetPostsDocument = gql`
  query GetPosts {
    posts {
      ...PostOnCard
    }
  }
  ${PostOnCardFragmentDoc}
`;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>
) {
  return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  );
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;
