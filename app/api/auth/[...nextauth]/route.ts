import { login } from "@/app/(login)/_api";
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
        await login(user.id, user.name ?? "", user.image ?? "");
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
  session: {
    maxAge: 3600,
    updateAge: 60,
  },
});

export { handler as GET, handler as POST };
