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
  session: {
    // 세션 만료 시간을 5분으로 설정
    maxAge: 5 * 60, // 5분
    // 세션 업데이트를 더 짧은 간격으로 설정하여 브라우저가 닫힐 때 로그아웃될 가능성을 높입니다.
    updateAge: 60, // 1분
  },
});

export { handler as GET, handler as POST };
