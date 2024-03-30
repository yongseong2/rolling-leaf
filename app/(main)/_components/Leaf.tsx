import { useRef, useState } from "react";
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
  const [opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  };
  const handleStop = () => {
    setOpacity(false);
  };
  const randomPosition = (max: number) => Math.floor(Math.random() * max);

  return (
    <Draggable
      onDrag={onDrag}
      onStart={handleStart}
      onStop={handleStop}
      position={leaf}
      bounds="parent"
      nodeRef={nodeRef}
    >
      <div
        className={`relative z-10 h-28 w-20 cursor-move ${opacity ? "opacity-60" : ""}`}
        ref={nodeRef}
        style={{ position: "absolute" }}
      >
        <p className="absolute -right-3 -top-3 z-20 text-c0">{leaf.title}</p>
        <div className="size-full animate-float bg-leaf bg-cover" />
      </div>
    </Draggable>
  );
}
