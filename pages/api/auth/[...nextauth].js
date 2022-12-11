import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import mongoose from "mongoose";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      // fetch user from database
      async authorize(credentials) {
        await mongoose.connect(process.env.MONGO_URI);
        const user = await User.findOne({ email: credentials.email });
        if (
          user.email === credentials.email &&
          user.password === credentials.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = await User.findOne({ email: session.user.email }, { password: 0 });
      if (session.user) {
        session.user =  user;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token = { user: { email: user.email, role: user.role } };
      }
      return token;
    }
  },

  pages: {
    signIn: "/auth/signin",
  },
});
