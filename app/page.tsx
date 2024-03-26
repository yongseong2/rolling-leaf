import Image from "next/image";
import { LandingBackground } from "./_components/common/LandingBackground";
import Wrapper from "./_components/common/Wrapper";
import { LoginButton } from "./_components/common/LoginButton";

export default function Home() {
  return (
    <Wrapper className="relative overflow-hidden">
      <LandingBackground />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="mt-20 flex h-full w-1/2 flex-col items-center justify-center">
          <Image
            src={"/images/leaf.png"}
            alt="leaf"
            layout="responsive"
            width={0}
            height={0}
          />
          <h1 className="mt-10 font-bold text-gray-50">롤링페이퍼로</h1>
          <h1 className="font-bold text-gray-50">마을을 전해보세요</h1>
        </div>

        <LoginButton />
      </div>
    </Wrapper>
  );
}
