import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({ req, secret, raw: false });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/login")) {
    if (session) {
      return NextResponse.redirect(new URL(`/home/${session.name}`, req.url));
    }
  }
}

export const config = {
  matcher: ["/login"],
};
