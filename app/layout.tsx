import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./_store/provider";
import ReactQueryProvider from "./query/ReactQueryProvider";

import { ModalProvider } from "./_components/common/Modal/ModalContext";
import { pretendard } from "./_fonts/fonts";

export const metadata: Metadata = {
  title: "나뭇잎 롤링페이퍼",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <link rel="manifest" href="/manifest.json" />
      <body className={pretendard.className}>
        <ReduxProvider>
          <ReactQueryProvider>
            <ModalProvider>{children}</ModalProvider>
          </ReactQueryProvider>
        </ReduxProvider>
        <div id="modal" />
      </body>
    </html>
  );
}
