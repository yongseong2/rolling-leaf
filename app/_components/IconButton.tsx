import { ButtonHTMLAttributes } from "react";
import * as Icons from "@/app/_asset/icons/index.ts";
import Icon from "./Icon";
import { colors } from "@/app/_design/colors";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
  className?: string;
}
export default function IconButton({
  name,
  size = 24,
  color = colors["dark-text"],
  className = "",
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={`transition-opacity duration-300 hover:opacity-60 ${className}`}
      {...rest}
    >
      <Icon name={name} size={size} color={color} />
    </button>
  );
}
