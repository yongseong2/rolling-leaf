import { Modal } from "@/app/_components/Modal";
import { ClientLeaf } from "../../../_types";
import { nanumHand } from "@/app/_fonts";

interface Props {
  leaf: ClientLeaf;
}

export function Letter({ leaf }: Props) {
  return (
    <Modal id={leaf.id} label={leaf.title} subLabel={leaf.authorName}>
      <div
        className={`whitespace-pre-line text-center text-lg font-bold ${nanumHand.className}`}
      >
        {leaf.content}
      </div>
    </Modal>
  );
}
