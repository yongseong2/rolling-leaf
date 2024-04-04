import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function LoginButton({ ...rest }: Props) {
  return (
    <button {...rest}>
      <Image
        className="hover:opacity-60"
        src={"/images/KakaoLoginButtonLogo_small.png"}
        alt="login"
        width={200}
        height={200}
      />
    </button>
  );
}
