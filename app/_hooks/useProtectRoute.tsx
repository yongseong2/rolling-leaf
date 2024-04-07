"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function useProtectRoute() {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname === "/oauth";
  const isHomePath = pathname.startsWith("/home");

  useEffect(() => {
    if (session.status === "authenticated" && isLoginPage) {
      router.push(`/home/${session.data.user?.id}`);
    } else if (
      session.status === "unauthenticated" &&
      !isLoginPage &&
      !isHomePath
    ) {
      router.push("/login");
    }
  }, [session.status, router, isLoginPage, isHomePath]);
}
