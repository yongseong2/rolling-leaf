"use client";
import React, { useEffect, useRef, useState } from "react";
import { DraggableData } from "react-draggable";
import { Leaf } from "./_components/Leaf";
import { Pond } from "./_components/Pond";
import { ClientLeaf } from "../../_types";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/app/_query";
import { getLeafs, getRecipientName } from "./_api";
import { ShareButton } from "./_components/ShareButton";
import { useSession } from "next-auth/react";

export default function MainPage({
  params,
}: {
  params: { recipientId: string };
}) {
  const [leafs, setLeafs] = useState<ClientLeaf[]>([]);
  const randomPosition = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const { data: session } = useSession();
  const isMine = session?.user.id === params.recipientId;

  const pondRef = useRef<HTMLDivElement>(null);
  const [pondSize, setPondSize] = useState({ width: 0, height: 0 });
  const { data: apiLeafs, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.GET_LEAF, pondSize, params.recipientId],
    queryFn: async () => await getLeafs(params.recipientId),
    select: data => ({
      leaves: data.leaves.map(leaf => ({
        ...leaf,
        x: randomPosition(pondSize.width - 100),
        y: randomPosition(pondSize.height - 100),
      })),
      counts: data.counts,
    }),
    enabled: pondSize.width > 0 && pondSize.height > 0,
  });

  const { data: apiRecipientName } = useQuery({
    queryKey: [QUERY_KEYS.GET_RECIPIENT_NAME, params.recipientId],
    queryFn: async () => await getRecipientName(params.recipientId),
  });

  const handleOnDrag = (id: string, data: DraggableData) => {
    const newLeafPosition = leafs.map(pos =>
      pos.id === id ? { ...pos, x: data.x, y: data.y } : pos,
    );
    setLeafs(newLeafPosition);
  };

  useEffect(() => {
    if (pondRef.current) {
      const { width, height } = pondRef.current.getBoundingClientRect();
      setPondSize({ width, height });
    }
  }, [pondRef.current]);

  useEffect(() => {
    if (isSuccess && apiLeafs) {
      setLeafs(apiLeafs.leaves);
    }
  }, [isSuccess, apiLeafs?.counts]);

  useEffect(() => {
    sessionStorage.setItem("from", params.recipientId);
  }, []);

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="">
        <h1 className="text-xl text-c0">
          {apiRecipientName && apiRecipientName.recipientName
            ? apiRecipientName.recipientName
            : "풀잎이"}
          님{isMine ? "에게" : "의"}
        </h1>
        <h1 className="text-2xl font-bold text-dark-text">
          {isMine ? (
            <>
              <span className="text-c0">
                {apiLeafs ? apiLeafs.counts : "0"}{" "}
              </span>
              개의 메시지가 전달됐어요
            </>
          ) : (
            "메시지를 확인해보세요"
          )}
        </h1>
      </div>
      <Pond ref={pondRef}>
        {leafs.map(position => (
          <Leaf
            key={position.id}
            onDrag={(e, data) => handleOnDrag(position.id, data)}
            leaf={position}
          />
        ))}
      </Pond>
      <ShareButton
        recipientName={apiRecipientName?.recipientName}
        recipientId={params.recipientId}
      />
    </div>
  );
}
