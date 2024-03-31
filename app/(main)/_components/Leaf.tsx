import { useRef, useState } from "react";
import Draggable, {
  DraggableEvent,
  DraggableData,
  DraggableEventHandler,
} from "react-draggable";
import { Modal } from "@/app/_components/common/Modal/Modal";
import { useModalContext } from "@/app/_components/common/Modal/ModalContext";
import Icon from "@/app/_components/common/Icon";
import { colors } from "@/app/_design/colors";

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
  const { openModal } = useModalContext();

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    onDrag(e, data);
  };

  const handleStop = () => {
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  const handleModal = () => {
    if (isDragging) return;
    openModal(leaf.id);
  };

  return (
    <>
      <Draggable
        nodeRef={nodeRef}
        position={{ x: leaf.x, y: leaf.y }}
        bounds="parent"
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div
          className={`relative z-10 cursor-move  hover:opacity-60 ${isDragging ? "opacity-60" : ""}`}
          ref={nodeRef}
          style={{ position: "absolute" }}
        >
          <div className="flex animate-float items-center justify-center gap-1">
            <div className="h-14 w-10  bg-leaf bg-cover" />
            <p
              onTouchStart={handleModal}
              className="z-20 flex h-fit items-center gap-1 rounded-lg bg-c2 p-1 text-xs text-c0"
            >
              {leaf.title}
              <Icon name="Open" size={12} color={colors.c0} />
            </p>
          </div>
        </div>
      </Draggable>
      <Modal id={leaf.id} label="안녕">
        {leaf.id} 안녕
      </Modal>
    </>
  );
}
