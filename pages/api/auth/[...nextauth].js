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
        console.log("credentials", credentials);
        // await mongoose.connect(process.env.MONGO_URI);
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
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return { ...session, user, token }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
});
