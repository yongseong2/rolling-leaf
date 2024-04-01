"use client";
import { useCreateContext } from "@/app/_context/CreateContext";
import { routes } from "@/app/_routes";
import Link from "next/link";

export default function SelectLeafPage({
  params,
}: {
  params: { userId: string };
}) {
  const { test } = useCreateContext();
  return (
    <div>
      <Link href={`${routes["write-letter"]}/${params.userId}`}>
        편지쓰기페이지로 이동
      </Link>
    </div>
  );
}
