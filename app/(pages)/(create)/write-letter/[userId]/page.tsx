"use client";
import Button from "@/app/_components/Button";
import { CreateTitle } from "../../_components/CreateTitle";
import { useCreateContext } from "@/app/_context/CreateContext";

export default function WriterLetterPage({
  params,
}: {
  params: { userId: string };
}) {
  const { state, action } = useCreateContext();
  const { leafForm } = state;

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <CreateTitle label="편지를 작성해주세요" />
      <label>
        <input
          type="checkbox"
          checked={leafForm.isAnonymous}
          onChange={action.handleIsAnonymousChange}
        />
        익명으로 작성
      </label>
      <input
        className="w-full"
        value={leafForm.title}
        onChange={action.handleTitleChange}
        placeholder="제목"
      />
      <textarea
        className="w-full"
        value={leafForm.content}
        onChange={action.handleContentChange}
        placeholder="내용"
      />

      <Button
        onClick={action.handleSubmit}
        className="border-2 border-dashed text-lg font-bold text-white"
      >
        작성 완료
      </Button>
    </div>
  );
}
