"use client";
import React, { ReactNode } from "react";
import IconButton from "./IconButton";
import { colors } from "@/app/_design/colors";
import { useParams, usePathname, useRouter } from "next/navigation";
import { routes } from "../_routes";
import Icon from "./Icon";

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
    <main className="relative flex h-screen min-h-screen max-w-screen-md flex-col overflow-auto bg-linear-custom-gradient from-c1 to-c2 px-6 pb-7">
      <header className="w-full py-3">
        {!isHome && (
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center"
          >
            <Icon size={20} name="Back" color={colors.c0} />
            <p>뒤로가기</p>
          </button>
        )}
        {isHome && (
          <IconButton
            className="flex size-10 items-center justify-center rounded-full bg-c2"
            name="Plus"
            color={colors.c0}
            onClick={() =>
              router.push(`${routes["select-leaf"]}/${params.userId}`)
            }
          />
        )}
      </header>
      {children}
    </main>
  );
};
