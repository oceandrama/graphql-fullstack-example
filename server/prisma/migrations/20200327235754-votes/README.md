# Migration `20200327235754-votes`

This migration has been generated by Ruslan Baigunussov at 3/27/2020, 11:57:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "Direction" AS ENUM ('UP', 'DOWN');

CREATE TABLE "public"."Vote" (
    "direction" "Direction" NOT NULL DEFAULT 'UP',
    "post" integer  NOT NULL ,
    "user" integer  NOT NULL ,
    PRIMARY KEY ("user","post")
) 

ALTER TABLE "public"."Vote" ADD FOREIGN KEY ("user")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Vote" ADD FOREIGN KEY ("post")REFERENCES "public"."Post"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200324001339-comments..20200327235754-votes
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -18,8 +18,9 @@
     email String @unique
     password String
     posts Post[]
     comments Comment[]
+    votes Vote[]
 }
 model Post {
     id Int @id @default(autoincrement())
@@ -28,8 +29,9 @@
     title String
     text String?
     author User
     comments Comment[]
+    votes Vote[]
 }
 model Comment {
     id Int @id @default(autoincrement())
@@ -39,5 +41,18 @@
     post Post
     text String
     replyTo Comment? @relation(name: "replyTo")
     replies Comment[] @relation(name: "replyTo")
+}
+
+enum Direction {
+  UP
+  DOWN
+}
+
+model Vote {
+    user User
+    post Post
+    direction Direction
+
+    @@id([user, post])
 }
```

