import React, { forwardRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Pond = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div ref={ref} className="pond relative flex-1 p-5">
      {children}
    </div>
  );
});
