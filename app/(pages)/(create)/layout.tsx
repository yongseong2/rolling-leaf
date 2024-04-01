"use client";
import { CreateProvider } from "@/app/_context/CreateContext";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CreateProvider>{children}</CreateProvider>;
}
