"use client";
import React, { ReactNode } from "react";
import IconButton from "./IconButton";
import { colors } from "@/app/_design/colors";
import { useParams, usePathname, useRouter } from "next/navigation";
import { routes } from "../_routes";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname.startsWith("/home");
  const params = useParams();

  return (
    <main className="relative flex h-screen min-h-screen max-w-screen-md flex-col overflow-auto bg-linear-custom-gradient from-c1 to-c2 px-6 py-14">
      {isHome && (
        <IconButton
          className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-c2"
          name="Plus"
          color={colors.c0}
          onClick={() => router.push(`${routes.create}/${params.userId}`)}
        />
      )}
      {children}
    </main>
  );
};
