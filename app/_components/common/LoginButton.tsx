import Image from "next/image";

export function LoginButton() {
  return (
    <Image
      className="mt-40 hover:opacity-60"
      src={"/images/KakaoLoginButtonLogo_small.png"}
      alt="login"
      width={200}
      height={200}
    />
  );
}
