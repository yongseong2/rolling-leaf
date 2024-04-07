"use client";
import Button from "@/app/_components/Button";
import Icon from "@/app/_components/Icon";
import { colors } from "@/app/_design/colors";
import { CreateTitle } from "../../_components/CreateTitle";

export default function WriterLetterPage({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <CreateTitle label="편지를 작성해주세요" />
      <input className="w-full" />
      <textarea className="w-full" />
      <Button className="border-2 border-dashed text-lg font-bold text-white">
        작성 완료
        <Icon name="Next" color={colors.c0} />
      </Button>
    </div>
  );
}
