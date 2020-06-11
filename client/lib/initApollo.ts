import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { NextPageContext } from "next";

const create = (initialState: NormalizedCacheObject, ctx?: NextPageContext) => {
  const isBrowser = typeof window !== "undefined";

  const httpLink = new HttpLink({
    headers: ctx?.req?.headers,
    uri: "http://localhost:4000",
    credentials: "include"
  });

  const client = new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Выключаем forceFetch на сервере, так что все запросы выполнятся один раз
    link: httpLink,
    cache: new InMemoryCache().restore(initialState)
  });

  return client;
};

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

export default function initApollo(
  initialState: NormalizedCacheObject = {},
  ctx?: NextPageContext
) {
  /**
   * Создаем apollo-client для каждого запроса на серверной стороне,
   * чтобы данные не были общими для разных соединений
   */
  if (typeof window === "undefined") {
    return create(initialState, ctx);
  }

  // Переиспользуем apollo-client на клиентской стороне
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
