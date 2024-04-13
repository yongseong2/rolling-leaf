"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { routes } from "../_routes";

export function useProtectRoute() {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/login" || pathname === "/oauth";
  const isHomePath = pathname.startsWith(`/${routes.home}`);
  const from = sessionStorage.getItem("from");

  useEffect(() => {
    if (session.status === "authenticated" && isLoginPage) {
      if (from) {
        router.push(`/${routes.home}/${from}`);
        sessionStorage.removeItem("from");
        return;
      }
      router.push(`/${routes.home}/${session.data.user?.id}`);
    } else if (
      session.status === "unauthenticated" &&
      !isLoginPage &&
      !isHomePath
    ) {
      router.push("/login");
    }
  }, [session.status, router, isLoginPage, isHomePath]);
}
