import { mutationType, stringArg } from "@nexus/schema";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export const Mutation = mutationType({
  definition(t) {
    t.field("login", {
      type: "User",
      args: {
        email: stringArg({ required: true }),
        password: stringArg({ required: true }),
      },
      resolve: async (_parent, { email, password }, { prisma, res }) => {
        const user = await prisma.user.findOne({ where: { email } });
        if (!user || !(await compare(password, user.password))) {
          throw new Error(
            "Пользователь с такой почтой и паролем не существует"
          );
        }

        const token = sign({ userId: user.id }, "supersecretkey");
        res.cookie("auth.token", token, { httpOnly: true });

        return user;
      },
    });
    t.crud.createOnePost();
    t.crud.updateOnePost();
    t.crud.deleteOnePost();

    t.crud.createOneComment();
    t.crud.updateOneComment();
    t.crud.deleteOneComment();

    t.crud.createOneVote();
    t.crud.updateOneVote();
    t.crud.deleteOneVote();
  },
});
