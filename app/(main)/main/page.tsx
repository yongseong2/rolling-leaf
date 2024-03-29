import Link from "@/app/_asset/icons/flowbite/Link";
import Button from "@/app/_components/common/Button";
import React from "react";

export default function MainPage() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="">
        <h1 className="text-xl text-c0">성용님에게</h1>
        <h1 className="text-2xl font-bold text-dark-text">
          <span className="text-c0">20</span>개의 메시지가 전달됐어요
        </h1>
      </div>
      <div className="pond relative flex-1">
        <div className="z-10 h-28 w-20 bg-leaf bg-cover"></div>
        <div className="z-10 h-28 w-20 bg-leaf bg-cover"></div>
        <div className="z-10 h-28 w-20 bg-leaf bg-cover"></div>
      </div>
      <div className="">
        <Button>
          <Link />
          공유하기
        </Button>
      </div>
    </div>
  );
}
