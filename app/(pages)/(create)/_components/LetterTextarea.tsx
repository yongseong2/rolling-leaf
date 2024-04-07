import React from "react";
import { nanumHand } from "@/app/_fonts";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export function LetterTextarea({ value, onChange, placeholder }: Props) {
  return (
    <textarea
      className={`${nanumHand.className} flex-1 rounded-md border-2 border-dashed border-c1 bg-light-cream px-2 py-3 text-lg font-bold  focus:border-black focus:outline-none`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
