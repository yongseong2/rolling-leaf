import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./_store/provider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
