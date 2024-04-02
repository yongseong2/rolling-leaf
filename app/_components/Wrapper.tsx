"use client";
import React, { ReactNode } from "react";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children }: Props) => {
  return (
    <main className="relative flex h-screen min-h-screen max-w-screen-md flex-col bg-linear-custom-gradient from-c1 to-c2 ">
      <Header />
      <article className="size-full px-5 pb-4">{children}</article>
    </main>
  );
};
