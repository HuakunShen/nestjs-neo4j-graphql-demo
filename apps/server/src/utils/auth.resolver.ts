import { comparePassword, createJWT, hashPassword } from './auth';
import { User } from './neo4j';

export const authResolvers = {
  Mutation: {
    signUp: async (_source, { username, password }) => {
      const [existing] = await User.find({
        where: {
          username,
        },
      });

      if (existing) {
        throw new Error(`User with username ${username} already exists!`);
      }

      const { users } = await User.create({
        input: [
          {
            username,
            plaintextPassword: password,
            password: await hashPassword(password),
          },
        ],
      });
      return createJWT({ sub: users[0].id });
    },
    signIn: async (_source, { username, password }) => {
      const [user] = await User.find({
        where: {
          username,
        },
      });

      if (!user) {
        throw new Error(`User with username ${username} not found!`);
      }

      const correctPassword = await comparePassword(password, user.password);

      if (!correctPassword) {
        throw new Error(
          `Incorrect password for user with username ${username}!`,
        );
      }
      const jwtClaim = { sub: user.id };
      return createJWT(jwtClaim);
    },
  },
};
