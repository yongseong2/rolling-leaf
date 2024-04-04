import { db } from "@vercel/postgres";
import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        const userId = user.id;
        const name = user.name;
        const image = user.image;
        await db.query(
          `
          INSERT INTO users (id, name, image)
          VALUES ($1, $2, $3)
          ON CONFLICT (id) DO
          UPDATE SET name = $2, image = $3
        `,
          [userId.toString(), name, image],
        );
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
