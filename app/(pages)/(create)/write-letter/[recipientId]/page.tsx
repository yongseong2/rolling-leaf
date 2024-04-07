"use client";
import Button from "@/app/_components/Button";
import { CreateTitle } from "../../_components/CreateTitle";
import { useCreateContext } from "@/app/_context/CreateContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLeaf } from "../../_api/post";
import { useRouter } from "next/navigation";
import { QUERY_KEYS } from "@/app/_query";
import { LetterTitle } from "../../_components/LetterTitle";
import { LetterTextarea } from "../../_components/LetterTextarea";
import { LetterCheckbox } from "../../_components/LetterCheckbox";

export default function WriterLetterPage({
  params,
}: {
  params: { recipientId: string };
}) {
  const { state, action } = useCreateContext();
  const { leafForm } = state;
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => await createLeaf(params.recipientId, leafForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_LEAF],
      });
      router.replace(`/home/${params.recipientId}`);
    },
    onError: (error: Error) => {
      console.error("Mutation error:", error);
    },
  });

  const handleSubmit = () => {
    mutation.mutate();
  };

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <CreateTitle label="편지를 작성해주세요" />
      <LetterTitle
        value={leafForm.title}
        onChange={action.handleTitleChange}
        placeholder="제목"
      />
      <LetterTextarea
        value={leafForm.content}
        onChange={action.handleContentChange}
        placeholder="내용"
      />
      <LetterCheckbox
        isChecked={leafForm.isAnonymous}
        onChange={action.handleIsAnonymousChange}
      />
      <Button
        onClick={() => handleSubmit()}
        className="border-2 border-dashed text-lg font-bold text-white"
      >
        편지 보내기
      </Button>
    </div>
  );
}
