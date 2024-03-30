"use client";
import ShareIcon from "@/app/_asset/icons/flowbite/ShareIcon";
import Button from "@/app/_components/common/Button";
import React, { useEffect, useState } from "react";
import { DraggableData } from "react-draggable";
import { Leaf } from "../_components/Leaf";
import { Pond } from "../_components/Pond";
import { ClientLeaf } from "../_types/main";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/app/query/QUERY_KEYS";
import { getLeafs } from "../_api/main";

export default function MainPage() {
  const [leafs, setLeafs] = useState<ClientLeaf[]>([]);
  const randomPosition = (max: number) => Math.floor(Math.random() * max);

  const { data, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.GET_LEAF],
    queryFn: async () => await getLeafs(),
    select: data =>
      data.map(leaf => ({
        ...leaf,
        x: randomPosition(200),
        y: randomPosition(200),
      })),
  });

  useEffect(() => {
    if (data) {
      setLeafs(data);
    }
  }, [isSuccess]);

  const handleOnDrag = (id: string, data: DraggableData) => {
    const newLeafPosition = leafs.map(pos =>
      pos.id === id
        ? { id: pos.id, title: pos.title, x: data.x, y: data.y }
        : pos,
    );
    setLeafs(newLeafPosition);
  };

  useEffect(() => {
    if (data) {
      setLeafs(data);
    }
  }, []);

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="">
        <h1 className="text-xl text-c0">성용님에게</h1>
        <h1 className="text-2xl font-bold text-dark-text">
          <span className="text-c0">20</span>개의 메시지가 전달됐어요
        </h1>
      </div>
      <Pond>
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
