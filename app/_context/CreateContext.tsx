"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface CreateState {
  test: string;
}

const CreateContext = createContext<CreateState>({} as CreateState);

export function CreateProvider({ children }: { children: ReactNode }) {
  const [test, setTest] = useState("안녕");

  return (
    <CreateContext.Provider value={{ test }}>{children}</CreateContext.Provider>
  );
}

export const useCreateContext = () => useContext(CreateContext);
