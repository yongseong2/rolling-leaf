import Image from "next/image";
import Link from "next/link";

export function LoginButton() {
  return (
    <Link href={`/main/${"user-id"}`}>
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
