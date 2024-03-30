import { useRef, useState } from "react";
import Draggable, {
  DraggableEvent,
  DraggableData,
  DraggableEventHandler,
} from "react-draggable";
import { Modal } from "@/app/_components/common/Modal/Modal";
import { useModalContext } from "@/app/_components/common/Modal/ModalContext";

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
  const [isDragging, setIsDragging] = useState(false);
  const [wasDragged, setWasDragged] = useState(false); // 드래그 발생 여부를 추적하는 새로운 상태
  const { openModal } = useModalContext();

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    onDrag(e, data);
    setWasDragged(true);
  };

  const handleStop = () => {
    setIsDragging(false);
    if (wasDragged) {
      setWasDragged(false);
    } else {
      openModal(leaf.id);
    }
  };

  return (
    <>
      <Draggable
        nodeRef={nodeRef}
        position={{ x: leaf.x, y: leaf.y }}
        bounds="parent"
        onDrag={handleDrag}
        onStart={() => setIsDragging(true)}
        onStop={handleStop}
      >
        <div
          className={`relative z-10 h-28 w-20 cursor-move hover:opacity-60 ${isDragging ? "opacity-60" : ""}`}
          ref={nodeRef}
          style={{ position: "absolute" }}
        >
          <p className="absolute -right-3 -top-3 z-20 text-c0">{leaf.title}</p>
          <div className="size-full animate-float bg-leaf bg-cover" />
        </div>
      </Draggable>
      <Modal id={leaf.id} label="안녕">
        {leaf.id} 안녕
      </Modal>
    </>
  );
}
