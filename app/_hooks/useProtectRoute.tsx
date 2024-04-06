"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useProtectRoute() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push(`/home/${session.data.user?.id}`);
    } else if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session.status, router]);
}
