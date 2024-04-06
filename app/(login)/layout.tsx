"use client";

import { useProtectRoute } from "../_hooks/useProtectRoute";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useProtectRoute();
  return <>{children}</>;
}
