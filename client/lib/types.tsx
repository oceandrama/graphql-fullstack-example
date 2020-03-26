import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type Comment = {
   __typename?: 'Comment';
  id: Scalars['Int'];
  text: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: User;
};

export type CommentFilter = {
  every?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
};

export type CommentWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  text?: Maybe<StringFilter>;
  replies?: Maybe<CommentFilter>;
  AND?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  author?: Maybe<UserWhereInput>;
  post?: Maybe<PostWhereInput>;
  replyTo?: Maybe<CommentWhereInput>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Post = {
   __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  author: User;
  comments: Array<Comment>;
};


export type PostCommentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<CommentWhereUniqueInput>;
  before?: Maybe<CommentWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PostFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type PostOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  title?: Maybe<OrderByArg>;
  text?: Maybe<OrderByArg>;
  author?: Maybe<OrderByArg>;
};

export type PostWhereInput = {
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  text?: Maybe<NullableStringFilter>;
  comments?: Maybe<CommentFilter>;
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  author?: Maybe<UserWhereInput>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
   __typename?: 'Query';
  post?: Maybe<Post>;
  posts: Array<Post>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<PostWhereUniqueInput>;
  before?: Maybe<PostWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
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
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type AuthorAvatarFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name'>
);

export type CommentOnCardFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'text'>
  & { author: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
    & AuthorAvatarFragment
  ) }
);

export type PostOnCardFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title' | 'text' | 'createdAt'>
  & { author: (
    { __typename?: 'User' }
    & AuthorAvatarFragment
  ) }
);

export type GetPostQueryVariables = {
  id: Scalars['Int'];
};


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & { comments: Array<(
      { __typename?: 'Comment' }
      & CommentOnCardFragment
    )> }
    & PostOnCardFragment
  )> }
);

export type GetPostsQueryVariables = {};


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & PostOnCardFragment
  )> }
);

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
    ${AuthorAvatarFragmentDoc}`;
export const PostOnCardFragmentDoc = gql`
    fragment PostOnCard on Post {
  id
  title
  text
  createdAt
  author {
    ...AuthorAvatar
  }
}
    ${AuthorAvatarFragmentDoc}`;
export const GetPostDocument = gql`
    query GetPost($id: Int!) {
  post(where: {id: $id}) {
    ...PostOnCard
    comments {
      ...CommentOnCard
    }
  }
}
    ${PostOnCardFragmentDoc}
${CommentOnCardFragmentDoc}`;

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
export function useGetPostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = ApolloReactCommon.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetPostsDocument = gql`
    query GetPosts {
  posts {
    ...PostOnCard
  }
}
    ${PostOnCardFragmentDoc}`;

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
export function useGetPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
      }
export function useGetPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = ApolloReactCommon.QueryResult<GetPostsQuery, GetPostsQueryVariables>;