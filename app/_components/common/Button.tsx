"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`flex size-fit rounded-lg border border-c2 bg-c1 px-2 py-1 text-white opacity-100 ${className} gap-1`}
    >
      {children}
    </button>
  );
}
