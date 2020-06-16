<h1 align="center">Next.js + Prisma = Fullstack GraphQL Application</h1>

### Используемые технологии, библиотеки и фреймворки

1. [Typescript](https://www.typescriptlang.org/) - строго типизированное надмножество `JavaScript`
2. [GraphQL](https://graphql.org/) - язык для запросов к API
3. [Next.js](https://nextjs.org/) - фреймворк на базе `React`
4. [Material-UI](https://material-ui.com/) - библиотека UI-компонентов
5. [Apollo Client](https://www.apollographql.com/docs/react/v3.0-beta/) - `GraphQL`-клиент
6. [GraphQL Code Generator](https://graphql-code-generator.com/) - утилита для генерации типов и запросов по `GraphQL`-схеме
7. [Prisma](https://www.prisma.io/) - фреймворк для работы с базами данных
8. [Nexus Schema](https://www.nexusjs.org/#/components/schema/about) - библиотека для построения `GraphQL`-схем. Часть фреймворка `Nexus`
9. [GraphQL Yoga](https://github.com/prisma-labs/graphql-yoga) - `GraphQL`-сервер

### Быстрый старт

#### Вам понадобится

1. `node`
2. `yarn`
3. `docker`

#### Запуск клиента

1. `cd client`
2. `yarn`
3. `yarn dev`
4. Приложение доступно по адресу http://localhost:3000

#### Запуск сервера

1. `cd server`
2. `yarn`
3. `docker-compose up -d`
4. `yarn migrate`
5. `yarn generate`
6. `yarn seed`
7. `yarn dev`
8. GraphQL Playground доступен по адресу http://localhost:4000
