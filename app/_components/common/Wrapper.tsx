"use client";

import React, { ReactNode, useMemo } from "react";
import { BottomNavBar } from "./BottomNavBar";
import { TopNavBar } from "./TopNavBar";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
  className?: string;
}
interface NavConfig {
  showTopNav: boolean;
  showBottomNav: boolean;
  navBarHeight: string;
}

type NavConfigMap = {
  [path: string]: NavConfig;
};

export const Wrapper = ({ className, children }: Props) => {
  const path = usePathname();
  const { topNavSpace, bottomNavSpace, allSpace, noneSpace } = useMemo(() => {
    const noneSpace = "0vh";
    const topSpace = "7vh";
    const bottomSpace = "8vh";
    const totalSpace = `${parseFloat(topSpace) + parseFloat(bottomSpace)}vh`;
    return {
      topNavSpace: topSpace,
      bottomNavSpace: bottomSpace,
      allSpace: totalSpace,
      noneSpace: noneSpace,
    };
  }, []);

  const navConfig: NavConfigMap = {
    "/main": {
      showTopNav: false,
      showBottomNav: true,
      navBarHeight: bottomNavSpace,
    },
  };

  // 현재 경로에 맞는 설정을 가져옴 (경로가 없으면 'default' 사용)
  const { showTopNav, showBottomNav, navBarHeight } =
    navConfig[path] || navConfig["default"];

  return (
    <main className="from-c1 to-c2 bg-linear-custom-gradient">
      {showTopNav && <TopNavBar topNavSpace={topNavSpace} path={path} />}
      <div
        className={`${className}`}
        style={{ minHeight: `calc(100vh - ${navBarHeight})`, overflow: "auto" }}
      >
        {children}
      </div>
      {showBottomNav && <BottomNavBar bottomNavSpace={bottomNavSpace} />}
    </main>
  );
};
