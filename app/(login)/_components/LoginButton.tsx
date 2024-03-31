import { routes } from "@/app/_routes";
import Image from "next/image";
import Link from "next/link";

export function LoginButton() {
  return (
    <Link href={`${routes.home}/${"user-id"}`}>
      <Image
        className="hover:opacity-60"
        src={"/images/KakaoLoginButtonLogo_small.png"}
        alt="login"
        width={200}
        height={200}
      />
    </Link>
  );
}
