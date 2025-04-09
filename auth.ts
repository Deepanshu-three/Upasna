import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import db from "./lib/db/prisma"
 
const adapter = PrismaAdapter(db)

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: adapter,
    providers: [Google],
})