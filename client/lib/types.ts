import { gql } from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
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
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<CommentWhereUniqueInput>;
  before?: Maybe<CommentWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryVoteArgs = {
  where: VoteWhereUniqueInput;
};

export type QueryVotesArgs = {
  where?: Maybe<VoteWhereInput>;
  orderBy?: Maybe<VoteOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<VoteWhereUniqueInput>;
  before?: Maybe<VoteWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
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
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<CommentWhereUniqueInput>;
  before?: Maybe<CommentWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserPostsArgs = {
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type UserVotesArgs = {
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<VoteWhereUniqueInput>;
  before?: Maybe<VoteWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
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
  rating: Scalars["Int"];
};

export type PostCommentsArgs = {
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<CommentWhereUniqueInput>;
  before?: Maybe<CommentWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type PostVotesArgs = {
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<VoteWhereUniqueInput>;
  before?: Maybe<VoteWhereUniqueInput>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
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
  authorId: Scalars["Int"];
  postId: Scalars["Int"];
  direction: Direction;
  author?: Maybe<User>;
  post?: Maybe<Post>;
};

export enum Direction {
  Up = "UP",
  Down = "DOWN",
}

export type CommentWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  text?: Maybe<StringFilter>;
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  replyToId?: Maybe<NullableIntFilter>;
  replies?: Maybe<CommentFilter>;
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  post?: Maybe<PostWhereInput>;
  replyTo?: Maybe<CommentWhereInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  not?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
};

export type StringFilter = {
  equals?: Maybe<Scalars["String"]>;
  not?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  not?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
};

export type CommentFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type PostWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  text?: Maybe<NullableStringFilter>;
  authorId?: Maybe<IntFilter>;
  comments?: Maybe<CommentFilter>;
  votes?: Maybe<VoteFilter>;
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars["String"]>;
  not?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
};

export type VoteFilter = {
  every?: Maybe<VoteWhereInput>;
  some?: Maybe<VoteWhereInput>;
  none?: Maybe<VoteWhereInput>;
};

export type VoteWhereInput = {
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  direction?: Maybe<Direction>;
  AND?: Maybe<Array<VoteWhereInput>>;
  OR?: Maybe<Array<VoteWhereInput>>;
  NOT?: Maybe<Array<VoteWhereInput>>;
  post?: Maybe<PostWhereInput>;
};

export type CommentOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  text?: Maybe<OrderByArg>;
  authorId?: Maybe<OrderByArg>;
  postId?: Maybe<OrderByArg>;
  replyToId?: Maybe<OrderByArg>;
};

export enum OrderByArg {
  Asc = "asc",
  Desc = "desc",
}

export type PostOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  title?: Maybe<OrderByArg>;
  text?: Maybe<OrderByArg>;
  authorId?: Maybe<OrderByArg>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
};

export type UserWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<NullableStringFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  posts?: Maybe<PostFilter>;
  comments?: Maybe<CommentFilter>;
  votes?: Maybe<VoteFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type PostFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  password?: Maybe<OrderByArg>;
};

export type VoteOrderByInput = {
  authorId?: Maybe<OrderByArg>;
  postId?: Maybe<OrderByArg>;
  direction?: Maybe<OrderByArg>;
};

export type Mutation = {
  __typename?: "Mutation";
  login: User;
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
};

export type VoteCreateWithoutPostInput = {
  direction: Direction;
};

export type CommentCreateManyWithoutReplyToInput = {
  create?: Maybe<Array<CommentCreateWithoutReplyToInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateWithoutReplyToInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text: Scalars["String"];
  post: PostCreateOneWithoutCommentsInput;
  replies?: Maybe<CommentCreateManyWithoutReplyToInput>;
};

export type PostUpdateInput = {
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  votes?: Maybe<VoteUpdateManyWithoutPostInput>;
};

export type CommentUpdateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostDataInput;
};

export type CommentUpdateWithoutPostDataInput = {
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text?: Maybe<Scalars["String"]>;
  replyTo?: Maybe<CommentUpdateOneWithoutRepliesInput>;
  replies?: Maybe<CommentUpdateManyWithoutReplyToInput>;
};

export type CommentUpdateOneWithoutRepliesInput = {
  create?: Maybe<CommentCreateWithoutRepliesInput>;
  connect?: Maybe<CommentWhereUniqueInput>;
  disconnect?: Maybe<Scalars["Boolean"]>;
  delete?: Maybe<Scalars["Boolean"]>;
  update?: Maybe<CommentUpdateWithoutRepliesDataInput>;
  upsert?: Maybe<CommentUpsertWithoutRepliesInput>;
};

export type CommentUpdateWithoutRepliesDataInput = {
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  replyTo?: Maybe<CommentUpdateOneWithoutRepliesInput>;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutCommentsDataInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithoutCommentsDataInput = {
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  votes?: Maybe<VoteUpdateManyWithoutPostInput>;
};

export type VoteUpdateManyWithoutPostInput = {
  create?: Maybe<Array<VoteCreateWithoutPostInput>>;
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  set?: Maybe<Array<VoteWhereUniqueInput>>;
  disconnect?: Maybe<Array<VoteWhereUniqueInput>>;
  delete?: Maybe<Array<VoteWhereUniqueInput>>;
  update?: Maybe<Array<VoteUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<VoteUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<VoteScalarWhereInput>>;
  upsert?: Maybe<Array<VoteUpsertWithWhereUniqueWithoutPostInput>>;
};

export type VoteUpdateWithWhereUniqueWithoutPostInput = {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutPostDataInput;
};

export type VoteUpdateWithoutPostDataInput = {
  direction?: Maybe<Direction>;
};

export type VoteUpdateManyWithWhereNestedInput = {
  where: VoteScalarWhereInput;
  data: VoteUpdateManyDataInput;
};

export type VoteScalarWhereInput = {
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  direction?: Maybe<Direction>;
  AND?: Maybe<Array<VoteScalarWhereInput>>;
  OR?: Maybe<Array<VoteScalarWhereInput>>;
  NOT?: Maybe<Array<VoteScalarWhereInput>>;
};

export type VoteUpdateManyDataInput = {
  direction?: Maybe<Direction>;
};

export type VoteUpsertWithWhereUniqueWithoutPostInput = {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutPostDataInput;
  create: VoteCreateWithoutPostInput;
};

export type PostUpsertWithoutCommentsInput = {
  update: PostUpdateWithoutCommentsDataInput;
  create: PostCreateWithoutCommentsInput;
};

export type CommentUpsertWithoutRepliesInput = {
  update: CommentUpdateWithoutRepliesDataInput;
  create: CommentCreateWithoutRepliesInput;
};

export type CommentUpdateManyWithoutReplyToInput = {
  create?: Maybe<Array<CommentCreateWithoutReplyToInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutReplyToInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutReplyToInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutReplyToInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutReplyToDataInput;
};

export type CommentUpdateWithoutReplyToDataInput = {
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text?: Maybe<Scalars["String"]>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  replies?: Maybe<CommentUpdateManyWithoutReplyToInput>;
};

export type CommentUpdateManyWithWhereNestedInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyDataInput;
};

export type CommentScalarWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  text?: Maybe<StringFilter>;
  authorId?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  replyToId?: Maybe<NullableIntFilter>;
  replies?: Maybe<CommentFilter>;
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
};

export type CommentUpdateManyDataInput = {
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text?: Maybe<Scalars["String"]>;
};

export type CommentUpsertWithWhereUniqueWithoutReplyToInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutReplyToDataInput;
  create: CommentCreateWithoutReplyToInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostDataInput;
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
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  text?: Maybe<Scalars["String"]>;
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
};

export type PostCreateWithoutVotesInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type VoteUpdateInput = {
  direction?: Maybe<Direction>;
  post?: Maybe<PostUpdateOneRequiredWithoutVotesInput>;
};

export type PostUpdateOneRequiredWithoutVotesInput = {
  create?: Maybe<PostCreateWithoutVotesInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutVotesDataInput>;
  upsert?: Maybe<PostUpsertWithoutVotesInput>;
};

export type PostUpdateWithoutVotesDataInput = {
  id?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpsertWithoutVotesInput = {
  update: PostUpdateWithoutVotesDataInput;
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
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CreatePostDocument, baseOptions);
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
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  );
}
export function useGetPostLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
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
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  );
}
export function useGetPostsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  );
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>;
