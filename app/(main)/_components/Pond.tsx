import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Pond({ children }: Props) {
  return <div className="pond relative flex-1 p-5">{children}</div>;
}
