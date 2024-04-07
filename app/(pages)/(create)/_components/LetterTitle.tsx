import React from "react";
import { nanumHand } from "@/app/_fonts";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export function LetterTitle({ value, onChange, placeholder }: Props) {
  return (
    <input
      className={`${nanumHand.className} rounded-md border-2 border-dashed border-c1 bg-light-cream px-2 py-3 text-xl font-bold  focus:border-black focus:outline-none`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
