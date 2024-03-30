import { useRef } from "react";
import Draggable, { DraggableEventHandler } from "react-draggable";

interface Props {
  leaf: {
    id: string;
    x: number;
    y: number;
    title: string;
  };
  onDrag: DraggableEventHandler;
}

export function Leaf({ leaf, onDrag }: Props) {
  const nodeRef = useRef(null);
  return (
    <Draggable
      onDrag={onDrag}
      position={leaf}
      bounds="parent"
      nodeRef={nodeRef}
    >
      <div className="relative z-10 h-28 w-20 cursor-move" ref={nodeRef}>
        <p className="absolute -right-3 -top-3 z-20 text-c0">{leaf.title}</p>
        <div className="h-full w-full animate-float bg-leaf bg-cover" />
      </div>
    </Draggable>
  );
}
