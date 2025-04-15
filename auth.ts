import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import db from "./lib/db/prisma";

const adapter = PrismaAdapter(db);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: adapter,
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  })],
  callbacks: {
    async session({ session }) {
      if (session?.user?.email === process.env.ADMIN_EMAIL) {
        await db.user.update({
          where: { email: session.user.email! },
          data: { isAdmin: true },
        })
      }
      return session;
    },
  },
});
