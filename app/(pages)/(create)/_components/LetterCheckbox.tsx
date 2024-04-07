import React from "react";
import Icon from "@/app/_components/Icon";
import { colors } from "@/app/_design/colors";

interface LetterCheckboxProps {
  isChecked: boolean;
  onChange: () => void;
}

export function LetterCheckbox({ isChecked, onChange }: LetterCheckboxProps) {
  return (
    <div className="flex w-fit items-center gap-2" onClick={onChange}>
      <div
        className={`flex size-6 items-center justify-center rounded-md border-2 border-dashed ${isChecked ? "border-black bg-action" : "border-c1 bg-light-cream"}`}
      >
        {isChecked ? (
          <Icon name="Check" size={18} color={colors["light-cream"]} />
        ) : null}
      </div>
      <span
        className={`font-bold ${isChecked ? "text-action" : "text-light-cream"}`}
      >
        익명으로 작성하기
      </span>
    </div>
  );
}
