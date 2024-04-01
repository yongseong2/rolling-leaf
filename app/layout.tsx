import type { Metadata } from "next";
import "./globals.css";
import Providers from "./_providers";
import { pretendard } from "./_fonts";

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
        <Providers>{children}</Providers>
        <div id="modal" />
      </body>
    </html>
  );
}
