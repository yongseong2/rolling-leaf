"use client";
import ShareIcon from "@/app/_asset/icons/flowbite/ShareIcon";
import Button from "@/app/_components/Button";
import React, { useEffect, useRef, useState } from "react";
import { DraggableData } from "react-draggable";
import { Leaf } from "./_components/Leaf";
import { Pond } from "./_components/Pond";
import { ClientLeaf } from "../../_types";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/app/_query";
import { getLeafs } from "./_api/get";
import { useSession } from "next-auth/react";

export default function MainPage({ params }: { params: { userId: string } }) {
  const [leafs, setLeafs] = useState<ClientLeaf[]>([]);
  const randomPosition = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const pondRef = useRef<HTMLDivElement>(null);
  const [pondSize, setPondSize] = useState({ width: 0, height: 0 });
  const { data, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.GET_LEAF, pondSize, params.userId],
    queryFn: async () => await getLeafs(params.userId),
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
    if (isSuccess && data) {
      setLeafs(data.leaves);
    }
  }, [isSuccess]);

  const { data: session } = useSession();

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="">
        <h1 className="text-xl text-c0">{session?.user.name}님에게</h1>
        <h1 className="text-2xl font-bold text-dark-text">
          <span className="text-c0">{data && data.counts} </span>개의 메시지가
          전달됐어요
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
      <Button className="border-2 border-dashed text-lg font-bold text-white">
        <ShareIcon />
        공유하기
      </Button>
    </div>
  );
}
