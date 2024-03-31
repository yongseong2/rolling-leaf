import { Modal } from "@/app/_components/common/Modal/Modal";
import { ClientLeaf } from "../_types/main";
import { nanumHand } from "@/app/_fonts/fonts";

interface Props {
  leaf: ClientLeaf;
}

export function Letter({ leaf }: Props) {
  return (
    <Modal id={leaf.id} label={leaf.title}>
      <div
        className={`whitespace-pre-line text-center text-lg font-bold ${nanumHand.className}`}
      >
        {leaf.content}
      </div>
    </Modal>
  );
}
