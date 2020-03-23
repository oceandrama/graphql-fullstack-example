import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const db = new PrismaClient();

async function main() {
  await db.post.create({
    data: {
      title: "Что же там было?",
      text: "Всё утро пытаюсь вспомнить сон. Как будто там что-то важное",
      createdAt: new Date("1869-03-01"),
      author: {
        create: {
          name: "Дмитрий Менделеев",
          email: "mendeley@mail.ru",
          password: await hash("12345", 10),
          createdAt: new Date("1834-02-08")
        }
      }
    }
  });

  const mariePost = await db.post.create({
    data: {
      title: "Хочу Нобелевскую премию!",
      text: "Поигралась с реагентами, пока муж спит. Люблю его",
      createdAt: new Date("1902-09-12"),
      author: {
        create: {
          name: "Мария Кюри",
          email: "m.curie@mail.pl",
          password: await hash("12345", 10),
          createdAt: new Date("1867-11-07")
        }
      }
    },
    select: {
      id: true
    }
  });

  await db.comment.create({
    data: {
      text: "Мария, ты в курсе, что они радиоактивные?!",
      post: {
        connect: {
          id: mariePost.id
        }
      },
      author: {
        create: {
          name: "Пьер Кюри",
          email: "p.curie@mail.pl",
          password: await hash("12345", 10),
          createdAt: new Date("1859-05-15")
        }
      }
    }
  });

  await db.user.create({
    data: {
      name: "Ирен Кюри",
      email: "i.curie@mail.pl",
      password: await hash("12345", 10),
      createdAt: new Date("1897-09-12"),
      comments: {
        create: {
          text: "Мама, когда я вырасту, я тоже буду ученым!",
          post: {
            connect: {
              id: mariePost.id
            }
          }
        }
      }
    }
  });
}

main().finally(() => {
  db.disconnect();
});
