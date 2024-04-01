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
      className={`flex items-center justify-center rounded-lg bg-gradient-to-r from-c1 to-deep-green py-2 opacity-100 ${className} gap-1`}
    >
      {children}
    </button>
  );
}
