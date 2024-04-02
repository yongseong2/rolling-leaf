import { LeafsType } from "@/app/(pages)/_types";

interface Props {
  type: LeafsType;
  onLeafClick?: (type: LeafsType) => void;
  isActive: boolean;
}

export function LeafCard({ type, onLeafClick, isActive }: Props) {
  const handleClick = () => {
    if (onLeafClick) {
      onLeafClick(type);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center rounded-md border-2 border-dashed ${isActive ? "border-dark-text bg-light-cream" : "border-action"}  bg-cover`}
    >
      <div className={`m-4 size-20 ${type} bg-cover`} />
    </button>
  );
}
