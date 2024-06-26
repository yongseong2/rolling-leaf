"use client";
import { Wrapper } from "../_components/Wrapper";
import { useProtectRoute } from "../_hooks/useProtectRoute";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useProtectRoute();
  return <Wrapper>{children}</Wrapper>;
}
