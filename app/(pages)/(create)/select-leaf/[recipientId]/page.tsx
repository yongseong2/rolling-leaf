"use client";
import Button from "@/app/_components/Button";
import Icon from "@/app/_components/Icon";
import { useCreateContext } from "@/app/_context/CreateContext";
import { colors } from "@/app/_design/colors";
import { routes } from "@/app/_routes";
import { LeafCard } from "../../_components/LeafCard";
import { useRouter } from "next/navigation";
import { LeafsType } from "@/app/(pages)/_types";
import { CreateTitle } from "../../_components/CreateTitle";

export default function SelectLeafPage({
  params,
}: {
  params: { recipientId: string };
}) {
  const { state, action } = useCreateContext();
  const router = useRouter();
  const { leafForm } = state;
  const leafs: LeafsType[] = [
    "bg-leaf0",
    "bg-leaf1",
    "bg-leaf2",
    "bg-leaf3",
    "bg-leaf4",
    "bg-leaf5",
    "bg-leaf6",
    "bg-leaf7",
    "bg-leaf8",
    "bg-leaf9",
    "bg-leaf10",
    "bg-leaf11",
    "bg-leaf12",
  ];

  return (
    <div className="flex h-full flex-col  justify-between gap-5">
      <CreateTitle label="나뭇잎을 선택해주세요" />
      <div className="flex justify-center overflow-auto">
        <div className="grid w-full grid-flow-row grid-cols-3 gap-2">
          {leafs.map(leaf => {
            return (
              <LeafCard
                key={leaf}
                type={leaf}
                onLeafClick={action.handleLeafType}
                isActive={leafForm.leafType === leaf}
              />
            );
          })}
        </div>
      </div>
      <Button
        onClick={() =>
          router.push(`${routes["write-letter"]}/${params.recipientId}`)
        }
        className="border-2 border-dashed text-lg font-bold text-white"
      >
        편지쓰기
        <Icon name="Next" color={colors.c0} />
      </Button>
    </div>
  );
}
